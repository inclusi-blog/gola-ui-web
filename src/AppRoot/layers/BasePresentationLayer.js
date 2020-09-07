import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ScreenSizeProvider from 'context-providers/screen-size-provider/ScreenSizeProvider';
import { base } from '../../theme';

const BasePresentationLayer = ({ children }) => {
  return (
    <ThemeProvider theme={base}>
      <ScreenSizeProvider>{children}</ScreenSizeProvider>
    </ThemeProvider>
  );
};

BasePresentationLayer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BasePresentationLayer;
