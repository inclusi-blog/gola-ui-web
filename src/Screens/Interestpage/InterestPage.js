import React, {useEffect, useState} from 'react';
import FollowerPic from 'assets/images/followerPic.svg';
import PostTile from 'common-components/PostTile';
import {useParams} from "react-router-dom";
import {
  MainContainer,
  PageTitle,
  FollowersCount,
  FollowersCountProfile,
  FollowButton,
  FollowLabel,
  BorderLine,
} from './InterestPage.style';
import { GetInterestDetails, GetPostsByInterest} from "./interestpage.service";
import countFormatter from "../../utils/commonUtils";

const InterestPage = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [interestDetails, setInterestDetails] = useState({});
  const {interestName} = useParams();

  useEffect(()=>{
    GetInterestDetails(interestName).then(({data})=>{
      setInterestDetails(data);
    }).catch((err)=>{
      // eslint-disable-next-line no-console
      console.log("Unable to get interest details.",err);
    });
  },[]);

  useEffect(()=>{
    if(interestDetails.interest_id){
      GetPostsByInterest(interestDetails.interest_id).then(({data})=>{
        setPostDetails(data);
      }).catch((err)=>{
        // eslint-disable-next-line no-console
        console.log("Unable to get post details by interest.",err);
      });
    }
  },[interestDetails]);

  const OnBookmarkStatusChange = (postID) => {
    setPostDetails(
      postDetails.map((post, index) => {
        if (index === postID) {
          return { ...post, isBookmarked: !post.isBookmarked };
        }
        return post;
      })
    );
  };

  const OnReadLaterStatusChange = (selectedIndex) => {
    setPostDetails(
      postDetails.map((post, index) => {
        if (index === selectedIndex) {
          return { ...post, isAddedToReadLater: !post.isAddedToReadLater };
        }
        return post;
      })
    );
  };

  const getPostDetails = () => {
    return postDetails.map((post) => {
      const details = {
        id: post.id,
        headLine: post.title,
        content: post.tagline,
        publishDate: post.published_at,
        tags: post.interests,
        authorName: post.author_name,
        likeCount: post.likes_count,
        previewImage: post.preview_image,
        isBookmarked: post.is_bookmarked,
        isAddedToReadLater: false,
        isLiked: post.is_viewer_liked,
        isRecentEdit: false,
      };
      return (
          <PostTile
              details={details}
              onBookmarkChange={(postID) => OnBookmarkStatusChange(postID)}
              OnReadLaterChange={(selectedIndex) => OnReadLaterStatusChange(selectedIndex)}
          />
      );
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MainContainer>
        <div>
          <div
            style={{
              display: 'flex',
              flex: '1',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <PageTitle>{interestDetails.name}</PageTitle>
            <div style={{ display: 'flex', flex: '8', justifyContent: 'flex-end', alignItems: 'center' }}>
              <FollowersCount>
                {countFormatter(interestDetails.followers_count)}
                <FollowersCountProfile src={FollowerPic} />
                Followers
              </FollowersCount>
              <FollowButton>
                <If condition={interestDetails.is_followed}>
                  <FollowLabel>Following</FollowLabel>
                  <Else/>
                  <FollowLabel>Follow</FollowLabel>
                </If>
              </FollowButton>
            </div>
          </div>
          <BorderLine />
          {getPostDetails()}
        </div>
      </MainContainer>
    </div>
  );
};

export default InterestPage;
