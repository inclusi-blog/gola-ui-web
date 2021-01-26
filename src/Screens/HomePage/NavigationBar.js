import React from 'react';
import PropTypes from 'prop-types';
import { FeedSorterText, FrontPage } from './NavigationBar.style';

const NavigationBar = ({ sidebarStyle, useHook }) => {
  const { selectedSort, feedList, onChangeSort } = useHook();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        ...sidebarStyle,
      }}
    >
      <div style={{ borderLeft: '1px solid #9A9A9A', paddingLeft: 24, height: 'fit-content' }}>
        <FrontPage>Front Page</FrontPage>
        <For each="feedSorterObject" of={feedList}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div key={feedSorterObject} onClick={() => onChangeSort(feedSorterObject)} style={{ cursor: 'pointer' }}>
            <FeedSorterText isSelected={selectedSort === feedSorterObject}>{feedSorterObject}</FeedSorterText>
          </div>
        </For>
      </div>
    </div>
  );
};

NavigationBar.defaultProps = {
  sidebarStyle: {},
};

NavigationBar.propTypes = {
  sidebarStyle: PropTypes.shape({}),
  useHook: PropTypes.func.isRequired,
};

export default NavigationBar;
