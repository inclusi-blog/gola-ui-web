import React from 'react';
import PropTypes from 'prop-types';
import {
  PublicationImg,
  PublicationTitle,
  PublicationDesc,
  FollowStatusButton,
  FollowStatus,
} from './UserPublication.style';

const Following = ({ details, index, onButtonClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '32px',
      }}
    >
      <PublicationImg src={details.publicationImage} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '18px' }}>
        <PublicationTitle>{details.publicationTitle}</PublicationTitle>
        <PublicationDesc>{details.publicationDesc}</PublicationDesc>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '18px' }}>
        <FollowStatusButton onClick={() => onButtonClick(index)} isFollowed={details.isFollowed}>
          <FollowStatus isFollowed={details.isFollowed}>{details.isFollowed ? 'Unfollow' : 'Follow'}</FollowStatus>
        </FollowStatusButton>
      </div>
    </div>
  );
};
Following.propTypes = {
  details: PropTypes.shape({
    publicationTitle: PropTypes.string.isRequired,
    publicationDesc: PropTypes.string.isRequired,
    publicationImage: PropTypes.string.isRequired,
    isFollowed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Following;
