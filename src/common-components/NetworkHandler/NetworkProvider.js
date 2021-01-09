import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialNetworkState, NetworkReducer } from './NetworkReducer';

export const NetworkContext = createContext({});

const NetworkProvider = ({ children }) => {
  const useNetworkState = useReducer(NetworkReducer, initialNetworkState);
  return <NetworkContext.Provider value={[...useNetworkState]}>{children}</NetworkContext.Provider>;
};

NetworkProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

NetworkProvider.defaultProps = {
  children: null,
};

export default NetworkProvider;
