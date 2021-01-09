import { useCallback } from 'react';
import { TOAST_EVENTS } from 'constants/events';
import useNetwork from './useNetwork';

const useAlert = () => {
  const [state, dispatch] = useNetwork();

  const hideMessageToast = useCallback(
    (id) => {
      if (state.toasts) {
        dispatch({ type: TOAST_EVENTS.hideMessageToast, payload: { id } });
      }
    },
    [dispatch]
  );

  const showMessageAlert = useCallback(
    (
      toastType,
      {
        toastMessage = '',
        toastPosition = 'left',
        id = 0,
        visible = true,
        onClick = null,
        timeout = 5000,
        fadeOutSeconds = 4500,
      }
    ) => {
      dispatch({
        type: TOAST_EVENTS.showMessageToast,
        payload: { toastMessage, toastPosition, type: toastType, id, onClick, visible, fadeOutSeconds },
      });

      const clearTime = setTimeout(() => hideMessageToast(id), timeout);

      return () => clearTimeout(clearTime);
    },
    [dispatch, hideMessageToast]
  );

  return {
    showMessageAlert,
  };
};

export default useAlert;
