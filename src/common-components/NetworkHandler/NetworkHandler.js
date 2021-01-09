import React, { useContext } from 'react';
import Toast from '../Toast/Toast';
import { ToastWrapper } from './NetworkHandler.style';
import { NetworkContext } from './NetworkProvider';

const NetworkHandler = () => {
  const [networkState] = useContext(NetworkContext);

  const getToast = () => {
    const { toasts } = networkState;
    return (
      <ToastWrapper toastPosition="left">
        {toasts
          .filter((item) => item.visible === true)
          .map((item) => (
            <Toast key={item.id} fadeOutSeconds={item.fadeOutSeconds} subTitle={item.toastMessage} />
          ))}
      </ToastWrapper>
    );
  };

  return <>{getToast()}</>;
};

export default NetworkHandler;
