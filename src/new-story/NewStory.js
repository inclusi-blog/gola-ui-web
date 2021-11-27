import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ajax from '../helpers/ajaxHelper';
import useBlur from '../hooks/useBlur';
import useDraft from '../hooks/useDraft';
import useEscapeHandler from '../hooks/useEscapeHandler';
import useSaveDraft from "../hooks/useSaveDraft";
import { GetDraft, SaveTagline } from './draft.service';
import PostEditor from "./editor/Editor";
import PreviewCard from './editor/PreviewCard';
import './fab-style.css';
import DraftPreviewModal from './preview-modal/DraftPreviewModal';

const NewStory = ({ location: { pathname } }) => {
  const [puid, setPUID] = useState('');
  const [contentData, setContentData] = useState({time: Date.now()});
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
    draftID
  } = useDraft();
  const { save } = useSaveDraft();
  const [titleText, setTitleText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [tagline, setTagline] = useState('');
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const params = useParams();
  const history = useHistory();

  const SaveDraft = ({ post, commandToRun = () => {} }) => {
    setIsSaving(true);

    if (!puid) {
      ajax
        .post('/post/v1/draft', {
          data: post,
        })
        .then(({ data }) => {
          setPUID(data.draft_id);
          commandToRun(data.draft_id);
          setIsSaving(false);
        })
        .catch(() => {
          setIsSaving(false);
        });
      return;
    }
    ajax
      .put(`/post/v1/draft?draft=${puid}`, {
        data: post,
      })
      .then(() => {
        setIsSaving(false);
        commandToRun();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
        setIsSaving(false);
      });
  };

  const SaveTaglineAndChangeRouteName = (changedTagline, commandToRun = {}) => {
    setIsSaving(true);
    if (!puid) {
      SaveTagline(puid, changedTagline)
        .then(() => {
          commandToRun();
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('something went wrong', err);
        });
      return;
    }
    SaveTagline(puid, changedTagline)
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

  const changeRouteName = (id) => {
    setIsInitiallySaved(true);
    setDraftID(id);
    window.history.replaceState(null, 'Draft', `/p/${id}/edit`);
  };

  const onChangeContent = (postData) => {
    console.log('this is path name', pathname, puid);
    if (!puid) {
      SaveDraft({
        post: postData,
        commandToRun: (id) => changeRouteName(id),
      });
      return;
    }
    SaveDraft({ post: postData });
  };

  const delayedHandleChangeContent = useCallback(
    debounce((eventData) => onChangeContent(eventData), 2000),
    [puid]
  );
  const delayedHandleChangeTagline = useCallback(
    debounce((eventData) => SaveTaglineAndChangeRouteName(eventData, () => changeRouteName()), 3000),
    [puid]
  );

  useEffect(() => {
    if (contentData?.blocks) {
      setTitleText(contentData.blocks.find((block) => ['paragraph', 'header'].includes(block.type))?.data?.text);
    }
  }, [contentData]);

  useEffect(() => {
    if (params?.draftId) {
      GetDraft(params.draftId)
        .then(({ data }) => {
          setPUID(params.draftId);
          setContentData(data.data);
          if (data.interests) {
            setSelectedTags(data.interests);
          }
          if (data.preview_image) {
            setPreviewImage(data.preview_image);
          }
          setTagline(data.tagline);
          setIsInitiallySaved(true);
          setDraftID(params.draftId);
          setIsPublished(data.is_published);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('unable to get draft', err);
        });
    }
  }, []);

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

  const updateDraft = useCallback((postData) => {
      console.log('new story', draftID);
      setContentData(postData);
      save(postData);
  }, [save]);

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
                delayedHandleChangeTagline(changedTagline);
              }}
              tagline={tagline}
              draftID={puid}
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
            marginTop: titleText.length ? 83 : 246,
          }}
        >
          <PostEditor
            onChangeRoute={updateDraft}
            value={contentData}
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
