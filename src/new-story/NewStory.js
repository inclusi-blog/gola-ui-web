import React, { useState } from 'react';
import ContentEditor from './editor/ContentEditor';
import TitleEditor from './editor/TitleEditor';
import { SideBar } from './NewStory.style';

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
        <SideBar
          // onClick={() => console.log('hello')}
          style={{
            borderRadius: 400 / 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              height: 1,
              width: 23,
              position: 'absolute',
              backgroundColor: '#3B3B58',
              borderWidth: 'thin',
            }}
          />
          <div
            style={{
              transform: 'rotate(90deg)',
              borderWidth: 'thin',
              backgroundColor: '#3B3B58',
              position: 'absolute',
              width: 23,
              height: 1,
            }}
          />
        </SideBar>
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
