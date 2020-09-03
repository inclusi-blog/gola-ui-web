import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';
import ContentEditor from './editor/ContentEditor';
import TitleEditor from './editor/TitleEditor';
import './fab-style.css';

const NewStory = ({ location: { pathname } }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [sideBarCoords, setSideBarCoords] = useState({ x: 336, y: 380 });

  const ChangeRoute = (postID) => {
    if (pathname === '/new-story') {
      window.history.replaceState(null, 'Draft', `/p/${postID}/edit`);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '1366px', display: 'flex', justifyContent: 'center' }}>
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
              setSideBarCoords({ x: rect.x - 80, y: rect.y - 17 });
            }}
            onChangeRoute={(postID) => ChangeRoute(postID)}
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
