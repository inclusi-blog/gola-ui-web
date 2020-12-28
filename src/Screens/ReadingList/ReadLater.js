import React, { useState } from 'react';
import ReadLaterTile from './ReadLaterTile';

const ReadLater = () => {
  const [postDetails, setPostDetails] = useState([
    {
      headLine: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
      content: 'விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.',
      publishDate: 'Jul 8,2020',
      tags: ['GARDENING', 'SPORTS'],
      authorName: 'Mensuvadi',
      likeCount: 757858,
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
      likeCount: 2453456,
      previewImage: 'https://d14r87p68zn22t.cloudfront.net/InterestedPost/Post/Postpic.png',
      isBookmarked: false,
      isAddedToReadLater: false,
      isLiked: false,
      isRecentEdit: false,
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
      <ReadLaterTile
        OnLikeChange={OnLikeStatusChange}
        OnBookmarkChange={OnBookmarkStatusChange}
        post={post}
        index={index}
        OnReadLaterChange={OnReadLaterStatusChange}
      />
    ));
  };
  return <div>{getPostDetails()}</div>;
};
export default ReadLater;
