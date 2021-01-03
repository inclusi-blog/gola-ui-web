import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SuperImg from 'assets/images/Super.png';
import BookMarkImg from 'assets/images/Bookmark.png';
import LaterImg from 'assets/images/Later.png';
// eslint-disable-next-line import/no-unresolved
import SuperClickImg from 'assets/images/SuperClick.png';
import BookmarkedImg from 'assets/images/bookmarked.svg';
import ReadLaterImg from 'assets/images/ReadLater.svg';
import EditImg from 'assets/images/Edit.svg';
import convertPostLikesCount from 'utils/commonUtils';
import {
  InterestMainContainer,
  PostHeadLine,
  PostContent,
  EditIcon,
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
} from './PostTile.style';

const PostTile = ({
  details,
  index,
  OnLikeChange,
  onBookmarkChange,
  OnReadLaterChange,
  borderWidth,
  canShowActionArea,
}) => {
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
    isRecentEdit,
  } = details;

  const renderPostTags = () => {
    return <PostTag>{tags[0]}</PostTag>;
  };
  return (
    <div>
      <InterestMainContainer style={{ marginTop: 32 }}>
        <CommonFlexColumn style={{ marginRight: 24 }}>
          <PostHeadLine>{headLine}</PostHeadLine>
          <PostContent>{content}</PostContent>
          <CommonFlexRow style={{ marginTop: 7, marginBottom: 4, alignItems: 'center' }}>
            <If condition={isRecentEdit}>
              <EditIcon src={EditImg} />
            </If>
            <PublishDate>{publishDate}</PublishDate>
            {renderPostTags()}
          </CommonFlexRow>
          <CommonFlexRow style={{ justifyContent: 'space-between', height: 25 }}>
            <AuthorName> {authorName}</AuthorName>
            <If condition={canShowActionArea}>
              <CommonFlexRow>
                <CommonFlexEnd>
                  <If condition={!isSavedPage}>
                    <Bookmark
                      src={isBookmarked ? BookmarkedImg : BookMarkImg}
                      onClick={() => onBookmarkChange(index)}
                    />
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
            </If>
          </CommonFlexRow>
        </CommonFlexColumn>
        <PostImage src={previewImage} />
      </InterestMainContainer>
      <div style={{ borderBottom: '1px solid #DEE3ED ', marginTop: 20, width: borderWidth }} />
    </div>
  );
};
PostTile.propTypes = {
  details: PropTypes.shape({
    headLine: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    authorName: PropTypes.string.isRequired,
    likeCount: PropTypes.number,
    previewImage: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool,
    isAddedToReadLater: PropTypes.bool,
    isLiked: PropTypes.bool,
    isRecentEdit: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  OnLikeChange: PropTypes.func.isRequired,
  onBookmarkChange: PropTypes.func.isRequired,
  OnReadLaterChange: PropTypes.func.isRequired,
  borderWidth: PropTypes.number,
  canShowActionArea: PropTypes.bool,
};

PostTile.defaultProps = {
  borderWidth: 438,
  canShowActionArea: true,
};

export default PostTile;
