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
  return (
    <InterestMainContainer style={{ marginTop: 32 }}>
      <CommonFlexColumn style={{ marginRight: 24 }}>
        <InterestHeadLine>{details.interestHeadLine}</InterestHeadLine>
        <InterestContent>{details.interestContent}</InterestContent>

        <CommonFlexRow style={{ marginTop: 7 }}>
          <PostDate>{details.postDate}</PostDate>
          <PostTag>{details.postTag}</PostTag>
          <PostName>{details.postName}</PostName>
        </CommonFlexRow>

        <CommonFlexRow style={{ justifyContent: 'space-between' }}>
          <AuthorName> {details.authorName} </AuthorName>
          <CommonFlexRow>
            <CommonFlexEnd>
              <Bookmark
                src={details.isBookmarked ? BookmarkedImg : BookMarkImg}
                onClick={() => onBookmarkChange(index)}
              />
              <ReadLater
                src={details.isAddedToReadLater ? ReadLaterImg : LaterImg}
                onClick={() => OnReadLaterChange(index)}
              />
              <HandSymbol src={details.isLiked ? SuperClickImg : SuperImg} onClick={() => OnLikeChange(index)} />
              <LikeCount>{details.LikeCount}</LikeCount>
              <CommonFlexRow>
                <SmallDots />
                <SmallDots />
                <SmallDots />
              </CommonFlexRow>
            </CommonFlexEnd>
          </CommonFlexRow>
        </CommonFlexRow>
        <div style={{ borderBottom: '1px solid black ', marginTop: 20 }} />
      </CommonFlexColumn>
      <InterestPostImage src={details.interestPostImage} />
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
    LikeCount: PropTypes.string.isRequired,
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
