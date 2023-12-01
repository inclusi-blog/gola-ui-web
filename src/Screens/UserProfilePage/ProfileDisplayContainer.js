import React from 'react';
import {
  CenterAlign,
  Divider,
  ProfileContentContainer,
  ProfileContentHeading,
  DataField,
} from './UserProfilePage.style';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../../common-components/PostSharePalatte.style';
import TwitterImg from 'assets/images/eva_twitter.png';
import FacebookImg from 'assets/images/eva_facebook.png';
import LinkedInImg from 'assets/images/eva_linkedin.png';

const ProfileDisplayContainer = ({ userDetails }) => {
  return (
    <ProfileContentContainer>
      <ProfileContentHeading>Name</ProfileContentHeading>
      <DataField>{userDetails.name}</DataField>
      <ProfileContentHeading>Username</ProfileContentHeading>
      <DataField>{userDetails.username}</DataField>
      <ProfileContentHeading>Email</ProfileContentHeading>
      <DataField>{userDetails.email}</DataField>
      <ProfileContentHeading>About ( 108 )</ProfileContentHeading>
      <DataField>{userDetails.about}</DataField>
      <ProfileContentHeading style={{ marginTop: '50px' }}>Social links</ProfileContentHeading>
      <CenterAlign style={{ justifyContent: 'space-between' }}>
        <DataField style={{ padding: '20px 0px 28px 0px', color: '#606060' }}>
          Paste your twitter profile link here..
        </DataField>
        <TwitterIcon src={TwitterImg} style={{ width: '32px', height: '32px', marginLeft: '204px' }} />
      </CenterAlign>
      <CenterAlign style={{ justifyContent: 'space-between' }}>
        <DataField style={{ padding: '28px 0px 28px 0px', color: '#606060' }}>
          Paste your Facebook profile link here..
        </DataField>
        <FacebookIcon src={FacebookImg} style={{ width: '32px', height: '32px', marginLeft: '204px' }} />
      </CenterAlign>
      <CenterAlign style={{ justifyContent: 'space-between' }}>
        <DataField style={{ padding: '28px 0px 28px 0px', color: '#606060' }}>
          Paste your Linkedin profile link here..
        </DataField>
        <LinkedInIcon src={LinkedInImg} style={{ width: '32px', height: '32px', marginLeft: '204px' }} />
      </CenterAlign>
      <Divider />
    </ProfileContentContainer>
  );
};

export default ProfileDisplayContainer;
