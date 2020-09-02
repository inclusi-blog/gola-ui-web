import React from 'react';
import { Top, Best, Hot, Recent, Personalized, VerticalLine, FrontPage } from './HomePage.style';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginRight: 87 }}>
        <VerticalLine />

        <div>
          <FrontPage>Front page</FrontPage>
          <Top>Top</Top>
          <Best>Best</Best>
          <Hot>Hot</Hot>
          <Recent>Recent</Recent>
          <Personalized>Personalized</Personalized>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
