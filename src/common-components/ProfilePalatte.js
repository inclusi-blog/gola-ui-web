import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AuthorProfile from 'assets/images/profile.png';
import PostSharePalatte from 'common-components/PostSharePalatte';
import {
  AuthorProfilePic,
  AuthorName,
  PostedDate,
  PostReadTime,
  FollowButton,
  FollowLabel,
  ApplyRow,
  ApplyColumn,
} from './ProfilePalatte.style';

const ProfilePalatte = ({ publishedDate, authorName, isAuthorViewingPost }) => {
  return (
    <ApplyRow style={{ justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' }}>
        <ApplyRow style={{ alignItems: 'center' }}>
          <AuthorProfilePic src={AuthorProfile} />
          <ApplyColumn style={{ marginLeft: 19, marginRight: 34 }}>
            <AuthorName>{authorName}</AuthorName>
            <ApplyRow style={{ marginTop: 8, width: 171, justifyContent: 'space-between' }}>
              <PostedDate>{moment(new Date(publishedDate)).format('d MMM, YYYY')}</PostedDate>
              <PostReadTime>5 min read</PostReadTime>
            </ApplyRow>
          </ApplyColumn>
          <If condition={!isAuthorViewingPost}>
            <FollowButton>
              <FollowLabel>Follow</FollowLabel>
            </FollowButton>
          </If>
        </ApplyRow>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <PostSharePalatte />
      </div>
    </ApplyRow>
  );
};

ProfilePalatte.propTypes = {
  publishedDate: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  isAuthorViewingPost: PropTypes.bool.isRequired,
};

export default ProfilePalatte;
