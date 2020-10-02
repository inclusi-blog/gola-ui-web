import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';
import ajax from '../helpers/ajaxHelper';
import ContentEditor from './editor/ContentEditor';
import TitleEditor from './editor/TitleEditor';
import './fab-style.css';

const NewStory = ({ location: { pathname } }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [sideBarCoords, setSideBarCoords] = useState({ x: 370, y: 380 });

  const SaveDraft = (postData, postID, commandToRun = {}) => {
    ajax
      .post('/post/v1/draft/upsertDraft', {
        user_id: '1',
        draft_id: postID,
        post_data: postData,
      })
      .then(() => {
        commandToRun();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
      });
  };

  const ChangeRoute = (postID, postData) => {
    if (pathname === '/new-story') {
      SaveDraft(postData, postID, () => {
        window.history.replaceState(null, 'Draft', `/p/${postID}/edit`);
      });
      return;
    }
    SaveDraft(postData, postID, () => {});
  };

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
          <TitleEditor />
          <ContentEditor
            setShowSideBar={setShowSideBar}
            setClientRects={(rect) => {
              setSideBarCoords({ ...sideBarCoords, y: rect.y - 17 });
            }}
            onChangeRoute={(postID, postData) => ChangeRoute(postID, postData)}
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
