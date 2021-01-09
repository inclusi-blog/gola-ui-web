import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TracingContext from './TracingContext';
import TraceReducer, { initialTraceState } from './TraceReducer';

const TracingProvider = ({ children }) => {
  const useTraceState = useReducer(TraceReducer, initialTraceState);

  return <TracingContext.Provider value={[...useTraceState]}>{children}</TracingContext.Provider>;
};

TracingProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

TracingProvider.defaultProps = {
  children: null,
};

export default TracingProvider;
