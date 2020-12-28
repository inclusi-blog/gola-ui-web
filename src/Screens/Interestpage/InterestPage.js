import React, { useState } from 'react';
import FollowerPic from 'assets/images/followerPic.svg';
import InterestPostTile from 'common-components/InterestPostTile';
import {
  MainContainer,
  PageTitle,
  FollowersCount,
  FollowersCountProfile,
  FollowButton,
  FollowLabel,
  BorderLine,
} from './InterestPage.style';

const InterestPage = () => {
  const [postDetails, setPostDetails] = useState([
    {
      headLine: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
      content: 'விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.',
      publishDate: 'Jul 8,2020',
      tags: ['GARDENING', 'SPORTS'],
      authorName: 'Mensuvadi',
      likeCount: 1500,
      previewImage: 'https://d14r87p68zn22t.cloudfront.net/InterestedPost/Post/Postpic.png',
      isBookmarked: false,
      isAddedToReadLater: false,
      isLiked: false,
      isRecentEdit: false,
    },
    {
      headLine: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
      content: 'விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.',
      publishDate: 'Jul 8,2020',
      tags: ['GARDENING', 'SPORTS'],
      authorName: 'Mensuvadi',
      likeCount: 1500,
      previewImage: 'https://d14r87p68zn22t.cloudfront.net/InterestedPost/Post/Postpic.png',
      isBookmarked: false,
      isAddedToReadLater: false,
      isLiked: false,
      isRecentEdit: true,
    },
    {
      headLine: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
      content: 'விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.',
      publishDate: 'Jul 8,2020',
      tags: ['GARDENING', 'SPORTS'],
      authorName: 'Mensuvadi',
      likeCount: 1500,
      previewImage: 'https://d14r87p68zn22t.cloudfront.net/InterestedPost/Post/Postpic.png',
      isBookmarked: false,
      isAddedToReadLater: false,
      isLiked: false,
      isRecentEdit: false,
    },
    {
      headLine: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
      content: 'விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.',
      publishDate: 'Jul 8,2020',
      tags: ['GARDENING', 'SPORTS'],
      authorName: 'Mensuvadi',
      likeCount: 1500,
      previewImage: 'https://d14r87p68zn22t.cloudfront.net/InterestedPost/Post/Postpic.png',
      isBookmarked: false,
      isAddedToReadLater: false,
      isLiked: false,
      isRecentEdit: true,
    },
  ]);

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

  const OnBookmarkStatusChange = (selectedIndex) => {
    setPostDetails(
      postDetails.map((post, index) => {
        if (index === selectedIndex) {
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
    return postDetails.map((post, index) => (
      <InterestPostTile
        details={post}
        index={index}
        OnLikeChange={(selectedIndex) => OnLikeStatusChange(selectedIndex)}
        onBookmarkChange={(selectedIndex) => OnBookmarkStatusChange(selectedIndex)}
        OnReadLaterChange={(selectedIndex) => OnReadLaterStatusChange(selectedIndex)}
      />
    ));
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
                64k
                <FollowersCountProfile src={FollowerPic} />
                Followers
              </FollowersCount>
              <FollowButton>
                <FollowLabel>Follow</FollowLabel>
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
