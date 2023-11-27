import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import useBlur from '../hooks/useBlur';
import useDebouncedEffect from "../hooks/useDebounceEffect";
import useDraft from '../hooks/useDraft';
import useEscapeHandler from '../hooks/useEscapeHandler';
import useSaveDraft from "../hooks/useSaveDraft";
import { GetDraft, SaveTagline } from './draft.service';
import PostEditor from "./editor/Editor";
import PreviewCard from './editor/PreviewCard';
import './fab-style.css';
import DraftPreviewModal from './preview-modal/DraftPreviewModal';
import EditorBasicConfig from "./editor/constants";

const NewStory = () => {
  const [contentData, setContentData] = useState({});
  useSaveDraft({editorData: contentData});
  const {
    setIsSaving,
    setIsInitiallySaved,
    setDraftID,
    setIsPublished,
    errorMessage,
    setErrorMessage,
    previewDraft,
    setPreviewDraft,
    postRedirect,
    redirectUrl,
    draftID,
    isInitiallySaved
  } = useDraft();
  const [basicConfig, setBasicConfig] = useState(EditorBasicConfig(draftID));
  const [titleText, setTitleText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [tagline, setTagline] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const params = useParams();
  const history = useHistory();

  const SaveTaglineAndChangeRouteName = (changedTagline) => {
    setIsSaving(true);
    SaveTagline(draftID, changedTagline)
      .then(() => {
        setIsSaving(false);
        // eslint-disable-next-line no-console
        console.log('saved tagline');
      })
      .catch((err) => {
        setIsSaving(false);
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
      });
  };

  useDebouncedEffect(() => {
    if (tagline){
      SaveTaglineAndChangeRouteName(tagline);
    }
  },[tagline], 3000);

  useEffect(() => {
    if (contentData?.blocks) {
      setTitleText(contentData.blocks.find((block) => ['paragraph', 'header'].includes(block.type))?.data?.text);
    }
  }, [contentData]);

  useEffect(() => {
    if (params?.draftId) {
      GetDraft(params.draftId)
        .then(({ data }) => {
          setDraftID(params.draftId);
          if (data.interests) {
            setSelectedTags(data.interests);
          }
          if (data.preview_image) {
            setPreviewImage(data.preview_image);
          }
          setTagline(data.tagline);
          setIsInitiallySaved(true);
          setIsPublished(data.is_published);
          setContentData(data.data);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('unable to get draft', err);
        });
      return;
    }
    setContentData({time: Date.now()});
  }, []);

  useEffect(() => {
    if (isInitiallySaved) {
      console.log("initially saved so updating the editor config");
      setBasicConfig(EditorBasicConfig(draftID));
    }
  }, [draftID, isInitiallySaved]);

  useEffect(() => {
    if (previewDraft) {
      setShowPreviewModal(true);
    } else {
      setShowPreviewModal(false);
    }
  }, [previewDraft]);

  useEffect(() => {
    if (errorMessage) {
      setShowPreviewModal(true);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (!showPreviewModal) {
      setErrorMessage(null);
      setPreviewDraft(null);
    }
  }, [showPreviewModal]);

  useEscapeHandler({
    onEscape: () => {
      if (showPreviewModal) {
        setShowPreviewModal(false);
      }
    },
  });

  useEffect(() => {
    if (postRedirect && redirectUrl) {
      history.push(redirectUrl, { shouldOpenSharePopup: true });
    }
  }, [postRedirect]);

  useBlur({ nodes: ['post-login-header', 'new-story'], isVisible: showPreviewModal });

  const updateDraft = (postData) => {
      setContentData(postData);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        id="new-story"
        style={{
          width: '1260px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ marginTop: 51 }}>
          <If condition={titleText?.length}>
            <PreviewCard
              title={titleText}
              onChangeTagline={(changedTagline) => {
                setTagline(changedTagline);
              }}
              tagline={tagline}
              draftID={draftID}
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              selectedFile={selectedFile}
              selectedTags={selectedTags}
              setSelectedFile={setSelectedFile}
              setSelectedTags={setSelectedTags}
            />
          </If>
        </div>
        <div
          style={{
            width: '62%',
            marginTop: titleText?.length ? 83 : 246,
          }}
        >
          <PostEditor
            onChangeRoute={updateDraft}
            value={contentData}
            basicConfig={basicConfig}
          />
        </div>
        <DraftPreviewModal onClose={() => setShowPreviewModal(false)} showPreviewModal={showPreviewModal} />
      </div>
    </div>
  );
};

NewStory.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewStory;
