import React, { useContext, useEffect } from 'react';
import ajax, { isCancel } from 'helpers/ajaxHelper';
import { NETWORK_EVENTS, SESSION_EVENTS } from 'constants/events';
import useLogger from 'hooks/useLogger';
import { NetworkContext } from 'common-components/NetworkHandler/NetworkProvider';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import TracingContext from 'context-providers/Tracing/TracingContext';

const ERR_INVALID_ACCESS_TOKEN = 'ERR_INVALID_ACCESS_TOKEN';
const ERR_AUTH_UNAUTHORIZED = 'ERR_AUTH_UNAUTHORIZED';
const STATUS_FORBIDDEN = 401;
let requestInterceptor;
let responseInterceptor;
let traceRequestInterceptor;

export const isInValidSession = (error) =>
  error.response.status === STATUS_FORBIDDEN &&
  (error.response.data.errorCode === ERR_INVALID_ACCESS_TOKEN ||
    error.response.data.errorCode === ERR_AUTH_UNAUTHORIZED);

// export const isResetSession = (error) => error.response.config.logoutReason === KILL_EXISTING_SESSION_BEFORE_LOGIN;

const AjaxInterceptors = () => {
  const [useNetworkState, dispatch] = useContext(NetworkContext);
  const { setIsTokenValid, accessToken, encryptedIdToken, logoutOnTokenExpiry } = useContext(LoggedInContext);
  if (accessToken && encryptedIdToken) {
    ajax.defaults.headers.common['enc-id-token'] = encryptedIdToken;
    ajax.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete ajax.defaults.headers.common['enc-id-token'];
    delete ajax.defaults.headers.common.Authorization;
  }
  if (useNetworkState.sessionTokenId) {
    ajax.defaults.headers.common['Session-Tracing-ID'] = useNetworkState.sessionTokenId;
  }
  const [traceState] = useContext(TracingContext);
  const { log } = useLogger();

  const onRequest = (config = {}) => {
    const { isTransaction = false, skipLoader = false } = config;
    if (!skipLoader) {
      dispatch({ type: NETWORK_EVENTS.networkCallBegin, isTransaction });
    }
    const modifiedConfig = config;
    modifiedConfig.headers = config.headers;
    return modifiedConfig;
  };

  useEffect(() => {
    if (traceState.trace) {
      const onRequestTrace = (request) => {
        request.headers = { ...request.headers, ...traceState.trace.headers() };
        return request;
      };
      ajax.interceptors.request.eject(traceRequestInterceptor);
      traceRequestInterceptor = ajax.interceptors.request.use(onRequestTrace, () => {});
    } else {
      ajax.interceptors.request.eject(traceRequestInterceptor);
    }
  }, [traceState]);

  useEffect(() => {
    const cleanup = () => {
      ajax.interceptors.request.eject(requestInterceptor);
      ajax.interceptors.response.eject(responseInterceptor);
    };

    const onRequestError = (error) => {
      if (!error.config.skipLoader) {
        dispatch({ type: NETWORK_EVENTS.networkCallFailure, visible: false });
      }
      return Promise.reject(error);
    };

    const onResponseError = (error) => {
      if (isCancel(error)) {
        // TODO: unsatisfied dispatch as we need request information in this area to avoid dispatch for the configs with skipLoader
        dispatch({ type: NETWORK_EVENTS.networkCallEnd, visible: false });
      } else {
        if (isInValidSession(error)) {
          dispatch({ type: SESSION_EVENTS.resetSession });
          log('AjaxInterceptors: invalid session: logout on token expiry');
          setIsTokenValid(false);
          logoutOnTokenExpiry();
        }

        if (!error.config.skipLoader) {
          dispatch({ type: NETWORK_EVENTS.networkCallEnd, visible: false });
        }
      }
      return Promise.reject(error);
    };

    requestInterceptor = ajax.interceptors.request.use(onRequest, onRequestError);

    responseInterceptor = ajax.interceptors.response.use((response) => {
      if (!response.config.skipLoader) {
        dispatch({ type: NETWORK_EVENTS.networkCallEnd, visible: false });
      }

      return response;
    }, onResponseError);

    return cleanup;
  }, []);

  return <></>;
};

export default AjaxInterceptors;
