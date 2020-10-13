import React from 'react';
import { Top, Best, Hot, Recent, Personalized, VerticalLine, FrontPage } from './NavigationBar.style';

const NavigationBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 200,
        right: 74,
        width: 154,
        height: 337,
      }}
    >
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
  );
};
export default NavigationBar;
