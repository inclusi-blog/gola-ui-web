import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'global-styles/GlobalStyle';
import BasePresentationLayer from './BasePresentationLayer';
import NetworkLayer from './NetworkLayer/NetworkLayer';

const BaseLayers = ({ children }) => {
  return (
    <BasePresentationLayer>
      <NetworkLayer>
        <GlobalStyle />
        <BrowserRouter>{children}</BrowserRouter>
      </NetworkLayer>
    </BasePresentationLayer>
  );
};

BaseLayers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BaseLayers;
