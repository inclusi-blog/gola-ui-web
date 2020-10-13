import styled from 'styled-components';

export const GeneralPostsContainer = styled.div`
  width: 901px;
  height: 468px;
  margin-top: 135px;
`;

export const PostPicture = styled.img``;

export const PostTitle = styled.p`
  font-family: Mukta Malar;
  font-style: normal;
  font-weight: 600;
  line-height: 129%;
  color: #000000;
  border-color: red;
`;

export const PostDate = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #2c363f;
`;

export const PostTags = styled.p`
  font-family: Mukta Malar;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  color: #3b3b58;
`;

export const PostAuthorName = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #03527c;
`;

export const PostSuperSymbol = styled.img`
  color: ${(props) => (props.isSelected ? '#FA163F' : '#2C363F')};
  cursor: pointer;
`;

export const PostLikes = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #3b3b58;
`;

export const SidePostContainer = styled.div`
  width: 416px;
  height: 468px;
`;

export const HorizontalLine = styled.div`
  border: 1px solid #dee3ed;
`;

export const ReadMore = styled.div`
  width: 86px;
  height: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #fa163f;
`;

export const Split = styled.div`
  width: 901px;
  height: 0px;
  right: 228px;
  top: 762px;
  border: 1px solid #dee3ed;
`;

export const SelectInterests = styled.p`
  width: 527px;
  height: 72px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #3b3b58;
`;

export const Video = styled.div`
  width: 642px;
  height: 294px;
  right: 322px;
  top: 975px;
  background: linear-gradient(360deg, #000000 0%, rgba(255, 255, 255, 0) 97.96%), url(.jpg);
  border: 1px solid #3b3b58;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const PostTagLine = styled.div`
  font-family: Quando;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #606060;
`;

export const PostBookMark = styled.img`
  color: ${(props) => (props.isSelected ? '#FA163F' : '#2C363F')};
  cursor: pointer;
`;

export const PostReadLater = styled.img`
  color: ${(props) => (props.isSelected ? '#FA163F' : '#2C363F')};
  cursor: pointer;
`;

export const PostDots = styled.img`
  background: #3b3b58;
  color: ${(props) => (props.isSelected ? '#FA163F' : '#2C363F')};
`;
