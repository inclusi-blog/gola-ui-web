import React from 'react';
import PropTypes from 'prop-types';
import {
  PublicationImg,
  PublicationTitle,
  PublicationDesc,
  Button,
  NewStoryLabel,
  Select,
} from './UserPublication.style';

const MemberIn = ({ details }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
      }}
    >
      <div style={{ flex: 0.5 }}>
        <PublicationImg src={details.publicationImage} />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', flex: 7.5, justifyContent: 'space-between', marginLeft: 18 }}
      >
        <PublicationTitle>{details.publicationTitle}</PublicationTitle>
        <PublicationDesc>{details.publicationDesc}</PublicationDesc>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 18,
          paddingTop: 12,
        }}
      >
        <Button>
          <NewStoryLabel>New story</NewStoryLabel>
        </Button>
        <Select>
          <option>Options</option>
        </Select>
      </div>
    </div>
  );
};

MemberIn.propTypes = {
  details: PropTypes.shape({
    publicationTitle: PropTypes.string.isRequired,
    publicationDesc: PropTypes.string.isRequired,
    publicationImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default MemberIn;
