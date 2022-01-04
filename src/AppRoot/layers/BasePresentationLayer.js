import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'context-providers/ThemeProvider';

const BasePresentationLayer = ({ children }) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  );
};

BasePresentationLayer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BasePresentationLayer;
