import React from 'react';
import {
  ApplyRow,
  ArrowImg,
  CommentAuthor,
  CommentAuthorName,
  CommentContent,
  CommentDate,
  CommentHandSymbol,
  SingleCommentContainer,
} from '../Screens/postView/PostView.style';
import CommentImg from 'assets/images/commentProfile.svg';
import superClick from 'assets/images/OkHand.svg';
import DownArrowImg from 'assets/images/Arrow.svg';
import moment from 'moment';

const SingleCommentTile = ({ singleComment }) => {
  return (
    <SingleCommentContainer>
      <ApplyRow>
        <CommentAuthor src={CommentImg} />
        <div
          style={{
            marginLeft: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <CommentAuthorName>{singleComment.username}</CommentAuthorName>
          <CommentDate>{moment(new Date(singleComment.commented_at)).format('MMM, YYYY')}</CommentDate>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 3 }}>
          <CommentHandSymbol src={superClick} />
        </div>
      </ApplyRow>
      <ApplyRow style={{ marginTop: 17 }}>
        <CommentContent>{singleComment.data}</CommentContent>
        <ArrowImg src={DownArrowImg} />
      </ApplyRow>
    </SingleCommentContainer>
  );
};

export default SingleCommentTile;
