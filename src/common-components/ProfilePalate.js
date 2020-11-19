import React from 'react';
import AuthorProfile from 'assets/images/profile.png';
import PostSharePalate from 'common-components/PostSharePalate';
import {
    ProfilePicRightLine,
    ProfilePicLeftLine,
    AuthorProfilePic,
    AuthorName,
    PostedDate,
    PostReadTime,
    FollowButton,
    FollowLabel,
    ApplyRow,
    ApplyColumn
} from './ProfilePalate.style';

const ProfilePalate = () => {
    return (
        <ApplyRow>
            <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
            <ApplyRow>
                <ProfilePicLeftLine />
                <AuthorProfilePic src={AuthorProfile} />
                <ProfilePicRightLine />
                <ApplyColumn>
                    <AuthorName />
                    <ApplyRow>
                        <PostedDate />
                        <PostReadTime />
                    </ApplyRow>
                </ApplyColumn>
                <FollowButton>
                    <FollowLabel></FollowLabel>
                </FollowButton>
            </ApplyRow>
             </div>  

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <PostSharePalate />
            </div>
        </ApplyRow>
    )
}

export default ProfilePalate;