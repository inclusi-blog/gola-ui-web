import styled from 'styled-components';

export const SignupHeader = styled.div`
  width: 279px;
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
  margin-left: 78px;
  margin-right: 79px;
  margin-top: 55px;
  display: flex;
  flex: row;
  justify-content: space-between;
  align-items: center;
`;

export const Facebook = styled.img`
  width: 47px;
  height: 47px;
  cursor: pointer;
`;

export const Twitter = styled.img`
  width: 46px;
  height: 47px;
  cursor: pointer;
`;

export const Google = styled.img`
  width: 46px;
  height: 46px;
  cursor: pointer;
`;

export const LinkedIn = styled.img`
  width: 46px;
  height: 47px;
  cursor: pointer;
`;
export const SignupWrapper = styled.div`
  margin-left: 78px;
  margin-right: 79px;
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const SignupLabelContainer = styled.div`
  margin-left: 78px;
  margin-right: 79px;
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
  margin-top: 34px;
`;

export const PasswordInput = styled.input`
  width: 489px;
  height: 68px;
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
  margin-items: center;
  margin-top: 40px;
`;

export const SignInTxt = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  mragin: 0 auto;
`;

export const TxtContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  margin-bottom: 30px;
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
