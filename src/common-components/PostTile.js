import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SuperImg from 'assets/images/Super.png';
import BookMarkImg from 'assets/images/Bookmark.png';
// eslint-disable-next-line import/no-unresolved
import SuperClickImg from 'assets/images/super_click.png';
import BookmarkedImg from 'assets/images/bookmarked.svg';
import EditImg from 'assets/images/Edit.svg';
import countFormatter from 'utils/commonUtils';
import moment from "moment";
import {
  InterestMainContainer,
  PostHeadLine,
  PostContent,
  EditIcon,
  PublishDate,
  PostTag,
  AuthorName,
  Bookmark,
  HandSymbol,
  LikeCount,
  SmallDots,
  CommonFlexRow,
  CommonFlexColumn,
  CommonFlexEnd,
  PostImage,
} from './PostTile.style';
import {BookmarkPost} from "../Screens/Interestpage/interestpage.service";
import {LikePost, UnlikePost} from "../Screens/postView/post.service";
import {CancelToken} from "../helpers/ajaxHelper";

const PostTile = ({
  details,
  borderWidth,
  canShowActionArea,
}) => {
  const location = useLocation();
  const isSavedPage = location.pathname === '/reading-list/saved';
  const [postDetails,setPostDetails] = useState(details);
  const [isLiked,setIsLiked]=useState(postDetails?.isLiked);
  const [likeCount,setLikeCount] = useState(postDetails.likeCount);
  const cancelTokens = [];
  const cleanup = useCallback(() => {
    if (cancelTokens.length > 0) {
      const cancelToken = cancelTokens.pop();
      cancelToken.cancel();
    }
  }, []);

  const renderPostTags = () => {
    return <PostTag>{postDetails.tags[0].name}</PostTag>;
  };

  useEffect(()=>{
    return cleanup;
  },[cleanup]);

  const onLikePost = () => {
    const cancelToken = CancelToken();
    LikePost(cancelToken, postDetails.id).then(() => {
      setIsLiked(true);
      setLikeCount(likeCount+1);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log('unable to like post', err);
    });
    cancelTokens.push(cancelToken);
  };

  const onUnlikePost = () => {
    const cancelToken = CancelToken();
    UnlikePost(cancelToken, postDetails.id).then(() => {
      setIsLiked(false);
      setLikeCount(likeCount-1);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log('unable to unlike post', err);
    });
    cancelTokens.push(cancelToken);
  };

  const onBookmark = () => {
    BookmarkPost(postDetails.id).then(()=>{
      setPostDetails({...postDetails,isBookmarked:true});
    }).catch((err)=>{
      // eslint-disable-next-line no-console
      console.log("Unable to bookmark",err);
    });
  };
  return (
    <div>
      <InterestMainContainer style={{ marginTop: 32 }}>
        <CommonFlexColumn style={{ marginRight: 24 }}>
          <PostHeadLine>{postDetails.headLine}</PostHeadLine>
          <PostContent>{postDetails.content}</PostContent>
          <CommonFlexRow style={{ marginTop: 7, marginBottom: 4, alignItems: 'center' }}>
            <If condition={postDetails.isRecentEdit}>
              <EditIcon src={EditImg} />
            </If>
            <PublishDate>{moment(new Date(postDetails.publishDate)).format('MMM DD,YYYY')}</PublishDate>
            {renderPostTags()}
          </CommonFlexRow>
          <CommonFlexRow style={{ justifyContent: 'space-between', height: 25 }}>
            <AuthorName> {postDetails.authorName}</AuthorName>
            <If condition={canShowActionArea}>
              <CommonFlexRow>
                <CommonFlexEnd>
                  <If condition={!isSavedPage}>
                    <Bookmark
                      src={postDetails.isBookmarked ? BookmarkedImg : BookMarkImg}
                      onClick={() => onBookmark()}
                    />
                  </If>
                  <HandSymbol src={isLiked ? SuperClickImg : SuperImg} onClick={isLiked?onUnlikePost:onLikePost} />
                  <LikeCount>{countFormatter(likeCount)}</LikeCount>
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
        <PostImage src={postDetails.previewImage} />
      </InterestMainContainer>
      <div style={{ borderBottom: '1px solid #DEE3ED ', marginTop: 20, width: borderWidth }} />
    </div>
  );
};
PostTile.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
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
  borderWidth: PropTypes.number,
  canShowActionArea: PropTypes.bool,
};

PostTile.defaultProps = {
  borderWidth: 438,
  canShowActionArea: true,
};

export default PostTile;
