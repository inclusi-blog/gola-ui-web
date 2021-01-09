import React from 'react';
import PropTypes from 'prop-types';
import NetworkProvider from 'common-components/NetworkHandler/NetworkProvider';
import TracingProvider from 'context-providers/Tracing/TracingProvider';
import TracingInit from 'tracing/TracingInit';
import NetworkHandler from 'common-components/NetworkHandler/NetworkHandler';
import AjaxInterceptors from 'helpers/AjaxInterceptors';

const NetworkLayer = ({ children }) => {
  return (
    <NetworkProvider>
      <TracingInit />
      <TracingProvider>
        <NetworkHandler />
        <AjaxInterceptors />
        {children}
      </TracingProvider>
    </NetworkProvider>
  );
};

NetworkLayer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default NetworkLayer;
