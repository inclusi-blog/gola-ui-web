export const initialNetworkState = {
  toasts: [],
};

export const TOAST_EVENTS = {
  showMessageToast: 'showMessageToast',
  hideMessageToast: 'hideMessageToast',
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
