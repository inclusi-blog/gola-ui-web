import styled from 'styled-components';
import Z_INDEX from 'constants/zIndex';

// eslint-disable-next-line import/prefer-default-export
export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 40px;

  z-index: ${Z_INDEX.TOASTER};

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  justify-content: ${(props) => {
    let position;
    if (props.toastPosition === 'right') {
      position = 'flex-end';
    } else if (props.toastPosition === 'left') {
      position = 'flex-start';
    } else {
      position = 'center';
    }
    return position;
  }};

  width: 100%;
  margin: 10px 0;
  padding: 0 48px;
`;
