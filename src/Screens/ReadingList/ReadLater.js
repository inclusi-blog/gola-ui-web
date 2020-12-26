import React, { useState } from 'react';
import InterestPostTile from 'common-components/InterestPostTile';
import RemoveImg from 'assets/images/close.svg';
import {
  RemoveCircleContainer,
  RemoveIcon,
  ApplyRow,
  HoverComponent
} from './ReadingList.style';

const ReadLater = () => {
  const [postDetails, setPostDetails] = useState([
    {
      interestHeadLine: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
      interestContent: 'விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.',
      postDate: 'Jul 8,2020',
      postTag: 'GARDENING',
      postName: 'GARDENING',
      authorName: 'Mensuvadi',
      likeCount: 1500,
      interestPostImage: 'https://d14r87p68zn22t.cloudfront.net/InterestedPost/Post/Postpic.png',
      isBookmarked: false,
      isLiked: false,
    },
    {
      interestHeadLine: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
      interestContent: 'விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.',
      postDate: 'Jul 8,2020',
      postTag: 'GARDENING',
      postName: 'GARDENING',
      authorName: 'Mensuvadi',
      likeCount: 1500,
      interestPostImage: 'https://d14r87p68zn22t.cloudfront.net/InterestedPost/Post/Postpic.png',
      isBookmarked: false,
      isLiked: false,
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

  const getPostDetails = () => {
    return postDetails.map((post, index) => (
      <ApplyRow>
        <InterestPostTile
          details={post}
          index={index}
          OnLikeChange={(selectedIndex) => OnLikeStatusChange(selectedIndex)}
          onBookmarkChange={(selectedIndex) => OnBookmarkStatusChange(selectedIndex)}
        />
        <div style={{ marginTop: 98 }}>
          <RemoveCircleContainer>
          <HoverComponent>Remove</HoverComponent>
            <RemoveIcon src={RemoveImg} />
          </RemoveCircleContainer>
        </div>
      </ApplyRow>
    ));
  };
  return (
    <div>
      {getPostDetails()}
    </div>
  )
}
export default ReadLater;