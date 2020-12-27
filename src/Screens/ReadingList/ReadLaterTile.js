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
  post: PropTypes.shape({
    headLine: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    authorName: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isAddedToReadLater: PropTypes.bool.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  OnLikeChange: PropTypes.func.isRequired,
  onBookmarkChange: PropTypes.func.isRequired,
  OnReadLaterChange: PropTypes.func.isRequired,
};

export default ReadLaterTile;
