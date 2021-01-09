import { useRef, useEffect, useCallback, useMemo } from 'react';
import ajax from 'helpers/ajaxHelper';
import GolaTrace from 'tracing/golaTrace';
import useLogger from 'hooks/useLogger';

const useTrace = (flowName, config = {}) => {
  let ajaxInterceptor;
  const span = useRef(new GolaTrace(flowName));
  const defaultConfig = { autoStart: true, autoAddHeaders: true, parentSpan: null };
  const mergedConfig = { ...defaultConfig, ...config };
  const { log: loggerLog } = useLogger();

  const end = useCallback(() => {
    span.current.end();
    if (mergedConfig.autoAddHeaders === true) {
      ajax.interceptors.request.eject(ajaxInterceptor);
    }
  }, [flowName]);

  const onRequest = (request) => {
    if (!request.headers?.['x-b3-traceid']) {
      request.headers = { ...request.headers, ...span.current.headers() };
    }
    return request;
  };

  const traceHeaders = () => {
    return span.current.headers();
  };

  const onRequestError = useMemo(() => {}, []);

  const start = useCallback(() => {
    span.current.start(mergedConfig.parentSpan);
    if (mergedConfig.autoAddHeaders === true) {
      ajaxInterceptor = ajax.interceptors.request.use(onRequest, onRequestError);
    }
  }, [flowName]);

  const log = (...objects) => {
    let description = '';

    objects.forEach((objectLog) => {
      try {
        if (typeof objectLog === 'string') {
          description += ` ${objectLog}`;
        } else {
          description += ` ${JSON.stringify(objectLog)}`;
        }
      } catch (e) {
        description += ` ${e}`;
      }
    });

    if (!span.current.isEnded()) {
      span.current.current().log(description);
    } else {
      loggerLog(description);
    }
  };

  useEffect(() => {
    if (mergedConfig.autoStart === true) {
      start();
    }
  }, [flowName]);

  return {
    start,
    traceHeaders,
    end,
    log,
  };
};

export default useTrace;
