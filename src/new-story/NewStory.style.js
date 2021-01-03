import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SideBar = styled.button`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 388px;
  left: 250px;
  border: 1px solid #3b3b58;
  outline: none;
`;

export const PublishPreviewCard = styled.div`
  width: 643px;
  height: 330px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  padding: 32px 48px 24px 47px;
`;

export const PublishPreviewTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #2c363f;
  margin: 0;
`;

export const ErrorNotifyPopup = styled.div`
  width: 659px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  padding: 44px 35px 24px 35px;
`;

export const ErrorStatusText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #3b3b58;
  margin: 0;
`;

export const ErrorActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 47px;
  justify-content: flex-end;
`;

export const PreviewActionItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 33px;
`;

export const CancelAction = styled.div`
  padding: 5px 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CancelText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ff6e05;
  margin: 0;
`;
