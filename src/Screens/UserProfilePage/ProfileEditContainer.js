import React from 'react';
import {
    AboutField,
    CenterAlign,
    InputField,
    ProfileContentContainer,
    ProfileContentHeading, NonEditableField
} from "./UserProfilePage.style";
import {FacebookIcon, LinkedInIcon, TwitterIcon} from "../../common-components/PostSharePalatte.style";
import TwitterImg from "assets/images/eva_twitter.png";
import FacebookImg from "assets/images/eva_facebook.png";
import LinkedInImg from "assets/images/eva_linkedin.png";

const ProfileEditContainer = ({userDetails, onProfileEdit}) => {
    return (
        <ProfileContentContainer>
            <ProfileContentHeading>Name</ProfileContentHeading>
            <InputField defaultValue={userDetails.name}
                        onChange={(event) => {
                            onProfileEdit('name',event.target.value);
                        }}/>
            <ProfileContentHeading>Username</ProfileContentHeading>
            <InputField defaultValue={userDetails.username}
                        onChange={(event) => {
                            onProfileEdit('username',event.target.value);
                        }}
            />
            <ProfileContentHeading>Email</ProfileContentHeading>
            <NonEditableField>{userDetails.email}</NonEditableField>
            <ProfileContentHeading>About ( 108 )</ProfileContentHeading>
            <AboutField style={{height: 130}} defaultValue={userDetails.about}
                        onChange={(event) => {
                            onProfileEdit('about',event.target.value);
                        }}
            />
            <ProfileContentHeading>Social links</ProfileContentHeading>
            <CenterAlign>
                <InputField style={{marginBottom: '8px'}}
                            placeholder='Paste your twitter profile link here..'
                            onFocus={(e) => e.target.placeholder = ''}
                            onBlur={(e) => e.target.placeholder = 'Paste your twitter profile link here..'}
                            onChange={(event) => {
                                onProfileEdit('twitter_url',event.target.value);
                            }}
                />
                <TwitterIcon src={TwitterImg} style={{width: '32px', height: '32px', marginLeft: '20px'}}/>
            </CenterAlign>
            <CenterAlign>
                <InputField style={{marginBottom: '8px'}}
                            placeholder='Paste your facebook profile link here..'
                            onFocus={(e) => e.target.placeholder = ''}
                            onBlur={(e) => e.target.placeholder = 'Paste your facebook profile link here..'}
                            onChange={(event) => {
                                onProfileEdit('facebook_url',event.target.value);
                            }}/>
                <FacebookIcon src={FacebookImg} style={{width: '32px', height: '32px', marginLeft: '20px'}}/>
            </CenterAlign>
            <CenterAlign>
                <InputField style={{marginBottom: '8px'}}
                            placeholder='Paste your linkedin profile link here..'
                            onFocus={(e) => e.target.placeholder = ''}
                            onBlur={(e) => e.target.placeholder = 'Paste your linkedin profile link here..'}
                            onChange={(event) => {
                                onProfileEdit('linked_in_url',event.target.value);
                            }}/>
                <LinkedInIcon src={LinkedInImg} style={{width: '32px', height: '32px', marginLeft: '20px'}}/>
            </CenterAlign>
        </ProfileContentContainer>
    );
};

export default ProfileEditContainer;
