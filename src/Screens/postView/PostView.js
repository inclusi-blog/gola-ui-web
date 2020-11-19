import React,{useState} from 'react';
import ProfilePalate from 'common-components/ProfilePalate';
import {
    MainContainer,
    PostMainImage
}  from './PostView.style';

const PostView = () => {
    const {postAuthorName} =useParams();
    const {post_url} =useParams();
    const {uniqueID} =useParams();
    const postTitle= UseState();
    return(
        <MainContainer>
            <PostMainImage />
            <ProfilePalate/>
        </MainContainer>    
    )
}
export default PostView;