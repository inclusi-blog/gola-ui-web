import React, { useState } from 'react';
import PostSharePalatte from 'common-components/PostSharePalatte';
import superClick from 'assets/images/OkHand.svg';
import CommentImg from 'assets/images/comment.svg';
import {
  SuperHandSymbolOuterLine,
  SuperHandSymbol,
  LikeCount,
  Comment,
  CommentCount,
  ApplyRow,
} from './ReviewPalatte.style';

const ReviewPalatte = () => {
  const [reviewData] = useState({
    likeCount: '4567',
    commentCount: '23',
  });
  return (
    <ApplyRow style={{ justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' }}>
        <ApplyRow style={{ alignItems: 'center' }}>
          <SuperHandSymbolOuterLine>
            <SuperHandSymbol src={superClick} />
          </SuperHandSymbolOuterLine>
          <LikeCount>{reviewData.likeCount}</LikeCount>
          <Comment src={CommentImg} />
          <CommentCount>{reviewData.commentCount}</CommentCount>
        </ApplyRow>
      </div>
      <PostSharePalatte />
    </ApplyRow>
  );
};
export default ReviewPalatte;
