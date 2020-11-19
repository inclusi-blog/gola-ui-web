import React from 'react';
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
  ApplyColumn
} from './ProfilePalatte.style';

const ProfilePalatte = () => {

  return (
    <ApplyRow style={{ justifyContent: 'space-between'}}>
      <div style={{display: 'flex'}}>
        <ApplyRow style={{ alignItems: 'center'}}>
          <AuthorProfilePic src={AuthorProfile}/>
          <ApplyColumn style={{ marginLeft: 19, marginRight: 34}}>
            <AuthorName>Swetha suresh</AuthorName>
            <ApplyRow style={{ marginTop: 8, width: 133, justifyContent: 'space-between'}}>
              <PostedDate>8 July</PostedDate>
              <PostReadTime>5 min read</PostReadTime>
            </ApplyRow>
          </ApplyColumn>
          <FollowButton>
            <FollowLabel>Follow</FollowLabel>
          </FollowButton>
        </ApplyRow>
      </div>

      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <PostSharePalatte/>
      </div>
    </ApplyRow>
  );
};

export default ProfilePalatte;
