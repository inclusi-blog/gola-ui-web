import styled from 'styled-components';

export const MainProfileContainer = styled.div`
  width: 1150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 40px;
  padding-top: 64px;
`;

export const PageDescription = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  color: #2c363f;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 70px;
  padding-top: 40px;
`;

export const ProfileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileContentContainer = styled.div`
  padding-left: 117px;
`;

export const ProfileUpload = styled.img`
  width: 176px;
  height: 176px;
  border-radius: 50%;
`;

export const ProfileUploadIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 110px;
  margin-right: 20px;
`;

export const ImageLabel = styled.label`
  margin-left: 120px;
  margin-top: 30px;
  position: absolute;
  cursor: pointer;
`;

export const UserName = styled.div`
  width: 271px;
  margin-top: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  margin-bottom: 8px;
`;

export const UserNameTag = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #3b3b58;
`;

export const ProfileContentHeading = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #3b3b58;
`;

export const InputField = styled.input`
  width: 489px;
  height: 59px;
  border: 0.881285px solid #2c363f;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 32px;
  padding-left: 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;

  &:focus {
    border: 0.881285px solid #2c363f;
    outline: none;
  }
`;

export const AboutField = styled.textarea`
  width: 489px;
  height: 59px;
  border: 0.881285px solid #2c363f;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 32px;
  padding-left: 16px;
  padding-top: 10px;

  &:focus {
    border: 0.881285px solid #2c363f;
    outline: none;
  }
`;

export const CenterAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SaveButton = styled.div`
  width: 96px;
  height: 31px;
  background: #fa163f;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 94px;
  cursor: pointer;
`;

export const SaveLabel = styled.div`
  font-family: Mukta Malar;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 129%;
  color: #ffffff;
`;

export const LinkStyle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;
`;

export const Divider = styled.div`
  border: 1px solid #9a9a9a;
  margin-top: 36px;
`;

export const DataField = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  padding: 16px 0px 40px 0px;
  margin-left: 0px;
`;

export const NonEditableField = styled.div`
  background: #f1f5f8;
  color: #000000;
  width: 475px;
  height: 59px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  margin: 6px 0px 32px 0px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
`;
