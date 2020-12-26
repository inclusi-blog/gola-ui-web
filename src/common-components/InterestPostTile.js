import React from 'react';
import PropTypes from 'prop-types';
import SuperImg from 'assets/images/Super.png';
import BookMarkImg from 'assets/images/Bookmark.png';
import LaterImg from 'assets/images/Later.png';
import SuperClickImg from 'assets/images/superclick.png';
import BookmarkedImg from 'assets/images/bookmarked.svg';
import ReadLaterImg from 'assets/images/ReadLater.svg';
import {
  InterestMainContainer,
  InterestHeadLine,
  InterestContent,
  PostDate,
  PostTag,
  PostName,
  AuthorName,
  Bookmark,
  ReadLater,
  HandSymbol,
  LikeCount,
  SmallDots,
  CommonFlexRow,
  CommonFlexColumn,
  CommonFlexEnd,
  InterestPostImage,
} from './InterestPostTile.style';

const InterestPostTile = ({ details, index, OnLikeChange, onBookmarkChange, OnReadLaterChange }) => {
  const {
    interestHeadLine,
    interestContent,
    postDate,
    postTag,
    postName,
    authorName,
    isBookmarked,
    isLiked,
    isAddedToReadLater,
    likeCount,
    interestPostImage,
  } = details;
  return (
    <InterestMainContainer style={{ marginTop: 32 }}>
      <CommonFlexColumn style={{ marginRight: 24 }}>
        <InterestHeadLine>{interestHeadLine}</InterestHeadLine>
        <InterestContent>{interestContent}</InterestContent>

        <CommonFlexRow style={{ marginTop: 7, marginBottom: 4 }}>
          <PostDate>{postDate}</PostDate>
          <PostTag>{postTag}</PostTag>
          <PostName>{postName}</PostName>
        </CommonFlexRow>

        <CommonFlexRow style={{ justifyContent: 'space-between' }}>
          <AuthorName> {authorName} </AuthorName>
          <CommonFlexRow>
            <CommonFlexEnd>
              <Bookmark src={isBookmarked ? BookmarkedImg : BookMarkImg} onClick={() => onBookmarkChange(index)} />
              <ReadLater src={isAddedToReadLater ? ReadLaterImg : LaterImg} onClick={() => OnReadLaterChange(index)} />
              <HandSymbol src={isLiked ? SuperClickImg : SuperImg} onClick={() => OnLikeChange(index)} />
              <LikeCount>{likeCount}</LikeCount>
              <CommonFlexRow>
                <SmallDots />
                <SmallDots />
                <SmallDots />
              </CommonFlexRow>
            </CommonFlexEnd>
          </CommonFlexRow>
        </CommonFlexRow>
        <div style={{ borderBottom: '1px solid #DEE3ED ', marginTop: 20 }} />
      </CommonFlexColumn>
      <InterestPostImage src={interestPostImage} />
    </InterestMainContainer>
  );
};
InterestPostTile.propTypes = {
  details: PropTypes.shape({
    interestHeadLine: PropTypes.string.isRequired,
    interestContent: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    postTag: PropTypes.string.isRequired,
    postName: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    interestPostImage: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isAddedToReadLater: PropTypes.bool.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  OnLikeChange: PropTypes.func.isRequired,
  onBookmarkChange: PropTypes.func.isRequired,
  OnReadLaterChange: PropTypes.func.isRequired,
};
export default InterestPostTile;
