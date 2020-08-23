import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'global-styles/GlobalStyle';

const BaseLayers = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
};

BaseLayers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BaseLayers;
