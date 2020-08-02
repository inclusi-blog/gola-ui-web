import React from 'react';
import ContentEditor from "./editor/ContentEditor";
import TitleEditor from "./editor/TitleEditor";

const NewStory = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '62%',
          marginTop: 246
        }}
      >
        <TitleEditor />
        <ContentEditor />
      </div>
    </div>
  );
};

export default NewStory;
