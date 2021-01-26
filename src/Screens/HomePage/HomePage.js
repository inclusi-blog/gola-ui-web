import React from 'react';
import GeneralFeed from './GeneralFeed';

const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <GeneralFeed sidebarStyle={{ marginTop: 130 }} />
    </div>
  );
};

export default HomePage;
