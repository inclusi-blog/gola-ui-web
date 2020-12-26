import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RemoveImg from 'assets/images/close.svg';
import InterestPostTile from 'common-components/InterestPostTile';
import { RemoveCircleContainer, RemoveIcon, ApplyRow, HoverComponent, RemoveLabel } from './ReadingList.style';

const ReadLaterTile = ({ OnLikeChange, OnBookmarkChange, post, index, OnReadLaterChange }) => {
  const [removeTipPosition, setRemoveTipPosition] = useState(0);
  return (
    <ApplyRow>
      <InterestPostTile
        details={post}
        index={index}
        OnLikeChange={(selectedIndex) => OnLikeChange(selectedIndex)}
        onBookmarkChange={(selectedIndex) => OnBookmarkChange(selectedIndex)}
        OnReadLaterChange={(selectedIndex) => OnReadLaterChange(selectedIndex)}
      />
      <div style={{ marginTop: 98 }}>
        <RemoveCircleContainer
          ref={(el) => {
            if (!el) {
              return;
            }
            const boundingClient = el.getBoundingClientRect();
            setRemoveTipPosition(boundingClient.top - 55);
          }}
        >
          <HoverComponent top={removeTipPosition}>
            <RemoveLabel>Remove</RemoveLabel>
          </HoverComponent>
          <RemoveIcon src={RemoveImg} />
        </RemoveCircleContainer>
      </div>
    </ApplyRow>
  );
};

ReadLaterTile.propTypes = {
  OnLikeChange: PropTypes.func.isRequired,
  OnBookmarkChange: PropTypes.func.isRequired,
  OnReadLaterChange: PropTypes.func.isRequired,
  post: PropTypes.shape({
    interestHeadLine: PropTypes.string.isRequired,
    interestContent: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    postTag: PropTypes.string.isRequired,
    postName: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    interestPostImage: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isAddedToReadLater: PropTypes.bool.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ReadLaterTile;
