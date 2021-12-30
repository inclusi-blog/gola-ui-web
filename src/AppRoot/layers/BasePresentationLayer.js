import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'context-providers/ThemeProvider';
import ScreenSizeProvider from 'context-providers/screen-size-provider/ScreenSizeProvider';

const BasePresentationLayer = ({ children }) => {
  return (
    <ThemeProvider>
      <ScreenSizeProvider>{children}</ScreenSizeProvider>
    </ThemeProvider>
  );
};

BasePresentationLayer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BasePresentationLayer;
