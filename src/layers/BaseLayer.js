import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const BaseLayers = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

BaseLayers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BaseLayers;
