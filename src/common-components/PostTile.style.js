import styled from 'styled-components';

export const PostHeadLine = styled.p`
  width: 450px;
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 129%;
  color: #000000;
  margin: 0;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const PostContent = styled.p`
  width: 450px;
  height: 55px;
  font-family: Quando;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #606060;
  margin: 0;
`;

export const PublishDate = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #9a9a9a;
  margin: 0;
  margin-right: 9px;
`;

export const PostTag = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #3b3b58;
  margin: 0;
  margin-right: 6px;
`;

export const AuthorName = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #fa163f;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Bookmark = styled.img`
  width: 13.5px;
  height: 17.36px;
  margin-right: 15.7px;
  cursor: pointer;
`;

export const HandSymbol = styled.img`
  width: 15.03px;
  height: 19.6px;
  margin-right: 4.21px;
  cursor: pointer;
`;

export const LikeCount = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #3b3b58;
  margin-right: 8px;
`;

export const SmallDots = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 200px;
  background: #3b3b58;
  margin-left: 1.82px;
`;

export const PostImage = styled.img`
  width: 168px;
  height: 168px;
`;

export const CommonFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommonFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommonFlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InterestMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 168px;
`;

export const EditIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 2px;
`;
