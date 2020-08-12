import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faImage, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';
import ContentEditor from './editor/ContentEditor';
import TitleEditor from './editor/TitleEditor';
import './fab-style.css';

const NewStory = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <If condition={showSideBar}>
        <div className="fab-container">
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
        <ContentEditor setShowSideBar={setShowSideBar} />
      </div>
    </div>
  );
};

export default NewStory;
