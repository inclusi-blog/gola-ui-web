import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 776px;
  border-bottom: 1px solid #dfdfdf;
`;

export const PostMainImage = styled.img`
  width: 412px;
  height: 300px;
`;

export const PreviewPostOuterContainer = styled.div`
  width: 776px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentContainer = styled.div`
  width: 756px;
  height: 72px;
  border: 1px solid #dee3ed;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`;

export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
`;

export const ApplyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ApplyColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentsDivider = styled.div`
  border: 1px solid #dfdfdf;
  margin-top: 16px;
  margin-bottom: 18px;
`;

export const CommentBox = styled.textarea`
  width: 533px;
  height: 40px;
  border: 0.881285px solid #2c363f;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 15px;
  margin-right: 15px;
  resize: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px 2px 10px;
  overflow-y: hidden;
  font-family: Poppins;
  &::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: #888888;
    text-align: center;
  }
`;

export const CommentButton = styled.div`
  width: 104px;
  height: 41px;
  background: #fa163f;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CommentLabel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 129%;
  color: #ffffff;
  margin: 0;
`;

export const ViewCommentListContainer = styled.div`
  width: 756px;
  margin-bottom: 47px;
  margin-top: 40px;
  border: 1px solid #dee3ed;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SingleCommentContainer = styled.div`
  width: 564px;
  height: 113px;
`;

export const CommentAuthor = styled.img`
  width: 50px;
  height: 50px;
`;

export const CommentAuthorName = styled.p`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 129%;
  color: #000000;
  margin: 0;
`;

export const CommentDate = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 129%;
  color: #7b7b7b;
  margin: 0;
`;

export const CommentHandSymbol = styled.img`
  width: 17.25px;
  height: 22.5px;
`;

export const CommentContent = styled.p`
  width: 467px;
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 129%;
  color: #000000;
  margin: 0 auto;
`;

export const ArrowImg = styled.img`
  margin-left: 87px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ViewAllComments = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 129%;
  color: #fa163f;
  margin-top: 48px;
  cursor: pointer;
`;
