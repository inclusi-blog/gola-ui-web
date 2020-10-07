import { debounce } from 'lodash';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import ajax from '../helpers/ajaxHelper';
import ContentEditor from './editor/ContentEditor';
import TitleEditor from './editor/TitleEditor';
import './fab-style.css';

const initialValue = [
  {
    children: [{ text: '' }],
  },
];

const NewStory = ({ location: { pathname } }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const puid = uuidv4().substring(24);
  const [sideBarCoords, setSideBarCoords] = useState({ x: 370, y: 380 });
  const [contentData, setContentData] = useState(initialValue);
  const [titleData, setTitleData] = useState(initialValue);

  const SaveDraft = ({ title, post, commandToRun = {} }) => {
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
      .post('/post/v1/draft/upsertDraft', data)
      .then(() => {
        commandToRun();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
      });
  };

  const onChangeTitle = (titleContent) => {
    if (pathname === '/new-story') {
      SaveDraft({
        title: titleContent,
        commandToRun: () => {
          window.history.replaceState(null, 'Draft', `/p/${puid}/edit`);
        },
      });
      return;
    }
    SaveDraft({ title: titleContent });
  };

  const onChangeContent = (postData) => {
    if (pathname === '/new-story') {
      SaveDraft({
        post: postData,
        commandToRun: () => {
          window.history.replaceState(null, 'Draft', `/p/${puid}/edit`);
        },
      });
      return;
    }
    SaveDraft({ post: postData });
  };

  const delayedHandleChangeTitle = useRef(debounce((eventData) => onChangeTitle(eventData), 5000)).current;
  const delayedHandleChangeContent = useRef(debounce((eventData) => onChangeContent(eventData), 5000)).current;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '1260px', display: 'flex', justifyContent: 'center' }}>
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
        <div
          style={{
            width: '62%',
            marginTop: 246,
          }}
        >
          <TitleEditor
            value={titleData}
            onChangeTitle={(changedTitle) => {
              setTitleData(changedTitle);
              delayedHandleChangeTitle(changedTitle);
            }}
          />
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
