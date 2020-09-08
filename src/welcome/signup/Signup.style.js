import styled from 'styled-components';

export const SignupHeader = styled.p`
  width: 279px;
  margin: 0;
  height: 60px;
  font-family: Quando;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  color: #2c363f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FacebookIcon = styled.img`
  width: 47px;
  height: 47px;
  cursor: pointer;
`;

export const TwitterIcon = styled.img`
  width: 46px;
  height: 47px;
  cursor: pointer;
`;

export const GoogleIcon = styled.img`
  width: 46px;
  height: 46px;
  cursor: pointer;
`;

export const LinkedInIcon = styled.img`
  width: 46px;
  height: 47px;
  cursor: pointer;
`;
export const SignupWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CenterSignupModalWrapper = styled.div`
  display: flex;
  padding-left: 78px;
  padding-right: 78px;
  flex-direction: column;
`;

export const SignupLabelContainer = styled.div`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignupLabel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: rgba(59, 59, 88, 0.64);
  margin: 0 auto;
`;

export const EmailLabel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #3b3b58;
  margin: 0;
`;

export const EmailInput = styled.input`
  width: 489px;
  height: 68px;
  border: 0.881285px solid #2c363f;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 8px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #2d2d2d;

  &:focus {
    background: #f1f5f8;
    border: 0px;
    outline: none;
  }
`;

export const PassLabel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #3b3b58;
  margin: 0;
`;

export const PasswordInput = styled.input`
  width: 489px;
  height: 68px;
  font-size: 24px;
  border: 0.881285px solid #2c363f;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 8px;

  &:focus {
    background: #f1f5f8;
    border: 0px;
    outline: none;
  }
`;

export const SignInButton = styled.div`
  width: 489px;
  height: 78px;
  background: #fa163f;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const SignInText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin: 0 auto;
`;

export const AuthBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top 28px;
  width: 100%;
`;

export const AccountTxt = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  margin: 0 auto;
`;

export const SignUpLink = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #fa163f;
  margin: 0 auto;
`;

export const ForgetPass = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  color: #fa163f;
  margin: 0;
  margin-left: 120px;
`;
