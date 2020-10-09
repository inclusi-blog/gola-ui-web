import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 860px;
  height: 1000px;
  padding: 64.22px 250px 112px 250px;
`;

export const PageTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #2c363f;
`;

export const PublicationSubTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #fa163f;
  margin: 0;
`;

export const PublicationActionType = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #3b3b58;
  margin: 0 auto;
  margin-top: 56px;
`;

export const BorderLine = styled.p`
  width: 859px;
  border: 1px solid #2c363f;
`;

export const PublicationImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const PublicationTitle = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export const PublicationDesc = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #606060;
  margin-right: 49px;
`;

export const Button = styled.div`
  background: #fa163f;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px 4px 16px;
`;

export const NewStoryLabel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin: 0 auto;
`;

export const Select = styled.select`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #fa163f;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  outline: 0px;
`;

export const FollowStatusButton = styled.div`
  background: ${(props) => (props.isFollowed ? '#F1F5F8' : '#FA163F')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
`;

export const FollowStatus = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 129%;
  color: ${(props) => (props.isFollowed ? '#3B3B58' : '#FFFFFF')};
`;
