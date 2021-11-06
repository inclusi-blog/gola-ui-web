import React, {useEffect, useState} from 'react';
import FollowerPic from 'assets/images/followerPic.svg';
import PostTile from 'common-components/PostTile';
import {
  MainContainer,
  PageTitle,
  FollowersCount,
  FollowersCountProfile,
  FollowButton,
  FollowLabel,
  BorderLine,
} from './InterestPage.style';
import {BookmarkPost, GetInterestDetails, GetPostsByInterest} from "./interestpage.service";

const InterestPage = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [interestDetails, setInterestDetails] = useState([]);

  useEffect(()=>{
    Promise.all([GetPostsByInterest(),GetInterestDetails()]).then(([{data}, {data:detailsData}])=>{
      setPostDetails(data);
      setInterestDetails(detailsData);
    }).catch((err)=>{
      console.log('Error while getting posts by interest ', err);
    });
  },[]);

  const OnLikeStatusChange = (selectedIndex) => {
    setPostDetails(
      postDetails.map((post, index) => {
        if (index === selectedIndex) {
          return { ...post, isLiked: !post.isLiked };
        }
        return post;
      })
    );
  };

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
    return postDetails.map((post, index) => {
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
              index={index}
              OnLikeChange={(selectedIndex) => OnLikeStatusChange(selectedIndex)}
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
            <PageTitle>Interest</PageTitle>
            <div style={{ display: 'flex', flex: '8', justifyContent: 'flex-end', alignItems: 'center' }}>
              <FollowersCount>
                {interestDetails.followers_count}
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
