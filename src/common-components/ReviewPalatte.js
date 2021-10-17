import React, {useCallback, useEffect, useState} from 'react';
import PostSharePalatte from 'common-components/PostSharePalatte';
import LikeImage from 'assets/images/OkHand.svg';
import LikedImage from 'assets/images/PostLikedButton.svg';
import CommentImg from 'assets/images/comment_icon.png';
import {CancelToken} from "helpers/ajaxHelper";
import {
  SuperHandSymbolOuterLine,
  SuperHandSymbol,
  LikeCount,
  Comment,
  CommentCount,
  ApplyRow,
} from './ReviewPalatte.style';
import {LikePost, UnlikePost} from "../Screens/postView/post.service";
import convertPostLikesCount from "../utils/commonUtils";

const ReviewPalatte = ({likesCount, commentsCount, isViewerLiked, postID}) => {
  const [isLiked,setIsLiked]=useState(false);
  const [likeCount,setLikeCount] = useState(likesCount);
  const cancelTokens = [];
  const cleanup = useCallback(() => {
    if (cancelTokens.length > 0) {
      const cancelToken = cancelTokens.pop();
      cancelToken.cancel();
    }
  }, []);

  const onLikePost = () => {
    const cancelToken = CancelToken();
    LikePost(cancelToken, postID).then(() => {
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
    UnlikePost(cancelToken, postID).then(() => {
      setIsLiked(false);
      setLikeCount(likeCount-1);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log('unable to unlike post', err);
    });
    cancelTokens.push(cancelToken);
  };

  useEffect(()=>{
    return cleanup;
  },[cleanup]);

  useEffect(()=>{
    setIsLiked(isViewerLiked);
  },[isViewerLiked]);

  return (
    <ApplyRow style={{ justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' }}>
        <ApplyRow style={{ alignItems: 'center' }}>
          <SuperHandSymbolOuterLine onClick={isLiked?onUnlikePost:onLikePost}>
            <SuperHandSymbol src={isLiked? LikedImage: LikeImage} />
          </SuperHandSymbolOuterLine>
          <LikeCount>{convertPostLikesCount(likeCount)}</LikeCount>
          <Comment src={CommentImg} />
          <CommentCount>{commentsCount}</CommentCount>
        </ApplyRow>
      </div>
      <PostSharePalatte />
    </ApplyRow>
  );
};
export default ReviewPalatte;
