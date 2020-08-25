import styled from 'styled-components';
import Z_INDEX from '../../constants/zIndex';
import device from '../../helper/styleHelper';

export const HeaderWrapper = styled.header`
  z-index: ${Z_INDEX.HEADER};
  height: 64px;
  display: flex;
  flex-direction: row;

  @media ${device.laptop} {
    background-color: white;
    box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;
  }
`;

export const LeftHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
`;

export const LogoIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const AppHeaderName = styled.p`
  margin: 0 0 0 12px;
  font-family: Quando;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #3b3b58;
`;

export const RightHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const SignInButton = styled.div`
  width: 80px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 45px;
`;

export const SignInButtonText = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #fa163f;
`;

export const SubscribeButton = styled.div`
  border: 1px solid #fa163f;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 37px;
  cursor: default;
  margin-right: 92px;
`;

export const SubscribeText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #3b3b58;
  margin: 0;
`;
