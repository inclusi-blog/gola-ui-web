import { TRACE_EVENTS } from 'constants/events';
import GolaTrace from 'tracing/golaTrace';

export const initialTraceState = {
  trace: null,
  activeFlowName: '',
};

const TraceReducer = (state, action) => {
  let trace;

  switch (action.type) {
    case TRACE_EVENTS.start:
      if (!state.trace) {
        trace = new GolaTrace(action?.flowName);
        trace.start();
        return {
          ...state,
          trace,
          activeFlowName: action?.flowName,
        };
      }
      return { ...state };

    case TRACE_EVENTS.end:
      if (state.activeFlowName === action.flowName) {
        state.trace.end();
        return { ...state, trace: null, activeFlowName: '' };
      }
      return { ...state };
    default:
      return initialTraceState;
  }
};

export default TraceReducer;
