import { debounce } from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import NewStoryContext from 'context-providers/new-story-provider/NewStoryContext';
import ajax from '../helpers/ajaxHelper';
import { SaveTagline } from './draft.service';
import ContentEditor from './editor/ContentEditor';
import PreviewCard from './editor/PreviewCard';
import './fab-style.css';

const initialValue = [
  {
    children: [{ text: '' }],
  },
];

const NewStory = ({ location: { pathname } }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const puid = uuidv4().substring(24);
  const [sideBarCoords, setSideBarCoords] = useState({ x: 370, y: 430 });
  const [contentData, setContentData] = useState(initialValue);
  const { setIsSaving, setIsInitiallySaved } = useContext(NewStoryContext);
  const [titleText, setTitleText] = useState('');

  const SaveDraft = ({ title, post, commandToRun = () => {} }) => {
    setIsSaving(true);
    let data = {
      user_id: '1',
      draft_id: puid,
    };
    if (title) {
      data = { ...data, title_data: title, target: 'title' };
    } else {
      data = { ...data, post_data: post, target: 'post' };
    }

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

  const SaveTaglineAndChangeRouteName = (tagline, commandToRun = {}) => {
    setIsSaving(true);
    if (pathname === '/new-story') {
      SaveTagline(puid, tagline, '1')
        .then(() => {
          commandToRun();
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('something went wrong', err);
        });
      return;
    }
    SaveTagline(puid, tagline, '1')
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

  const delayedHandleChangeContent = useRef(debounce((eventData) => onChangeContent(eventData), 2000)).current;
  const delayedHandleChangeTagline = useRef(
    debounce((eventData) => SaveTaglineAndChangeRouteName(eventData, () => changeRouteName()), 3000)
  ).current;

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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
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
              onChangeTagline={(tagline) => delayedHandleChangeTagline(tagline)}
              postID={puid}
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
