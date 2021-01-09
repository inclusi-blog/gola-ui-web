import { useContext, useCallback } from 'react';
import TracingContext from 'context-providers/Tracing/TracingContext';
import GolaTrace from '../tracing/golaTrace';

// to be used in future
// import LOG_LEVELS from 'constants/logging';

const useLogger = () => {
  const [traceState] = useContext(TracingContext);

  function endTrace(trace) {
    if (traceState.trace === null || traceState.trace?.isEnded()) {
      trace.end();
    }
  }

  function getTrace() {
    let trace;
    if (traceState.trace === null || traceState.trace?.isEnded()) {
      trace = new GolaTrace('');
      trace.start();
    } else {
      trace = traceState.trace;
    }
    return trace;
  }

  const log = useCallback(
    (...objects) => {
      let description = '';
      const trace = getTrace();

      objects.forEach((objectLog) => {
        try {
          description += ` ${JSON.stringify(objectLog)}`;
        } catch (e) {
          description += ` ${e}`;
        }
      });
      trace.current().log(description);

      endTrace(trace);
      // to be used in future
      // console[level](description);

      // eslint-disable-next-line no-console
      console.log(description);
    },
    [traceState]
  );

  // to be used in future
  //   const debug = (...objects) => log(LOG_LEVELS.DEBUG, objects);
  //   const info = (...objects) => log(LOG_LEVELS.INFO, objects);
  //   const error = (...objects) => log(LOG_LEVELS.ERROR, objects);

  return {
    log,
  };
};

export default useLogger;
