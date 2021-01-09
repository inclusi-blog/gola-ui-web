import isEmpty from 'lodash.isempty';
import { uuid } from 'uuidv4';
import { TOAST_EVENTS } from 'constants/events';

const getSessionTraceId = () => {
  if (isEmpty(sessionStorage.getItem('Session-Tracing-ID'))) {
    sessionStorage.setItem('Session-Tracing-ID', uuid().replace(/-/g, ''));
  }
  return sessionStorage.getItem('Session-Tracing-ID');
};

export const initialNetworkState = {
  toasts: [],
  sessionTokenId: getSessionTraceId(),
};

export const NetworkReducer = (state, action) => {
  switch (action.type) {
    case TOAST_EVENTS.showMessageToast:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case TOAST_EVENTS.hideMessageToast:
      return {
        ...state,
        toasts: state.toasts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, visible: false };
          }
          return item;
        }),
      };
    default:
      return initialNetworkState;
  }
};
