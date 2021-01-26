import React from 'react';
import NavigationBar from '../../Screens/HomePage/NavigationBar';

const withFeedSorter = (Component, useHook) => (props) => {
  const { sidebarStyle } = props;
  return (
    <section>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Component {...props} />
        <NavigationBar sidebarStyle={sidebarStyle} useHook={useHook} />
      </div>
    </section>
  );
};

export default withFeedSorter;
