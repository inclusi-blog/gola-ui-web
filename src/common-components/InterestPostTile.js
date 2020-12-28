import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SuperImg from 'assets/images/Super.png';
import BookMarkImg from 'assets/images/Bookmark.png';
import LaterImg from 'assets/images/Later.png';
import SuperClickImg from 'assets/images/superclick.png';
import BookmarkedImg from 'assets/images/bookmarked.svg';
import ReadLaterImg from 'assets/images/ReadLater.svg';
import convertPostLikesCount from 'utils/commonUtils';
import {
  InterestMainContainer,
  PostHeadLine,
  PostContent,
  PublishDate,
  PostTag,
  AuthorName,
  Bookmark,
  ReadLater,
  HandSymbol,
  LikeCount,
  SmallDots,
  CommonFlexRow,
  CommonFlexColumn,
  CommonFlexEnd,
  PostImage,
} from './InterestPostTile.style';

const InterestPostTile = ({ details, index, OnLikeChange, onBookmarkChange, OnReadLaterChange }) => {
  const location = useLocation();
  const isSavedPage = location.pathname === '/reading-list/saved';
  const isReadLaterPage = location.pathname === '/reading-list/read-later';

  const {
    headLine,
    content,
    publishDate,
    tags,
    authorName,
    isBookmarked,
    isLiked,
    isAddedToReadLater,
    likeCount,
    previewImage,
  } = details;

  const renderPostTags = () => {
    return tags.map((tag) => {
      return <PostTag>{tag}</PostTag>;
    });
  };
  return (
    <InterestMainContainer style={{ marginTop: 32 }}>
      <CommonFlexColumn style={{ marginRight: 24 }}>
        <PostHeadLine>{headLine}</PostHeadLine>
        <PostContent>{content}</PostContent>

        <CommonFlexRow style={{ marginTop: 7, marginBottom: 4 }}>
          <PublishDate>{publishDate}</PublishDate>
          {renderPostTags()}
        </CommonFlexRow>

        <CommonFlexRow style={{ justifyContent: 'space-between' }}>
          <AuthorName> {authorName}</AuthorName>
          <CommonFlexRow>
            <CommonFlexEnd>
              <If condition={!isSavedPage}>
                <Bookmark src={isBookmarked ? BookmarkedImg : BookMarkImg} onClick={() => onBookmarkChange(index)} />
              </If>
              <If condition={!isReadLaterPage}>
                <ReadLater
                  src={isAddedToReadLater ? ReadLaterImg : LaterImg}
                  onClick={() => OnReadLaterChange(index)}
                />
              </If>
              <HandSymbol src={isLiked ? SuperClickImg : SuperImg} onClick={() => OnLikeChange(index)} />
              <LikeCount>{convertPostLikesCount(likeCount)}</LikeCount>
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
      <PostImage src={previewImage} />
    </InterestMainContainer>
  );
};
InterestPostTile.propTypes = {
  details: PropTypes.shape({
    headLine: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    authorName: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
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
