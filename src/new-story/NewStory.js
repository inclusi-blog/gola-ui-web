import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import ajax from '../helpers/ajaxHelper';
import useBlur from '../hooks/useBlur';
import useDraft from '../hooks/useDraft';
import useEscapeHandler from '../hooks/useEscapeHandler';
import { GetDraft, SaveTagline } from './draft.service';
import ContentEditor from './editor/ContentEditor';
import PreviewCard from './editor/PreviewCard';
import './fab-style.css';
import DraftPreviewModal from './preview-modal/DraftPreviewModal';

const initialValue = [
  {
    children: [{ text: '' }],
  },
];

const NewStory = ({ location: { pathname } }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [puid, setPUID] = useState('');
  const [sideBarCoords, setSideBarCoords] = useState({ x: 370, y: 430 });
  const [contentData, setContentData] = useState(initialValue);
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
  } = useDraft();
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
    const data = {
      user_id: 'some-user',
      draft_id: puid,
      post_data: post,
    };

    ajax
      .post('/post/v1/draft/upsert-draft', data)
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
    if (pathname === '/new-story') {
      SaveTagline(puid, changedTagline, '1')
        .then(() => {
          commandToRun();
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('something went wrong', err);
        });
      return;
    }
    SaveTagline(puid, changedTagline, '1')
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

  const changeRouteName = () => {
    setIsInitiallySaved(true);
    setDraftID(puid);
    window.history.replaceState(null, 'Draft', `/p/${puid}/edit`);
  };

  const onChangeContent = (postData) => {
    if (pathname === '/new-story') {
      SaveDraft({
        post: postData,
        commandToRun: changeRouteName(),
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
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < contentData.length; i++) {
      let flag = 0;
      if (contentData[i].children[0].text !== '') {
        flag = 1;
        setTitleText(contentData[i].children[0].text);
        break;
      }
      if (flag) {
        break;
      }
    }
  }, [contentData.length]);

  useEffect(() => {
    if (params?.draftId) {
      GetDraft(params.draftId)
        .then(({ data }) => {
          setPUID(params.draftId);
          setContentData(data.post_data);
          if (data.interest) {
            setSelectedTags(data.interest);
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
    } else {
      setPUID(uuidv4().substring(24));
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
        <If condition={showSideBar}>
          <div className="fab-container" style={{ top: sideBarCoords.y, left: sideBarCoords.x }}>
            <div className="fab fab-icon-holder">
              <FontAwesomeIcon icon={faPlus} />
            </div>

            <ul className="fab-options">
              <li>
                <div className="fab-icon-holder">
                  <FontAwesomeIcon icon={faImage} />
                </div>
              </li>
              <li>
                <div className="fab-icon-holder">
                  <FontAwesomeIcon icon={faVideo} />
                </div>
              </li>
            </ul>
          </div>
        </If>
        <div style={{ marginTop: 51 }}>
          <If condition={titleText.length}>
            <PreviewCard
              title={titleText}
              onChangeTagline={(changedTagline) => {
                setTagline(changedTagline);
                delayedHandleChangeTagline(changedTagline);
              }}
              tagline={tagline}
              postID={puid}
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
          <ContentEditor
            setShowSideBar={setShowSideBar}
            setClientRects={(rect) => {
              setSideBarCoords({ ...sideBarCoords, y: rect.y - 17 });
            }}
            onChangeRoute={(postData) => {
              setContentData(postData);
              delayedHandleChangeContent(postData);
            }}
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
