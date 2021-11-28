import moment from "moment";
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {
  ApplyRow,
  ApplyColumn,
  Tagline,
  Date,
  TagList,
  SmallDots,
  PublishButton,
  PublishLabel,
} from './DraftList.style';
import {PostHeadLine} from "./PostTile.style";

const DraftTile = ({ draftContent }) => {
  const createdAt = moment(draftContent.created_at);
  return (
    <div>
      <ApplyColumn style={{ marginTop: 32 }}>
        <Link to={`/p/${draftContent.id}/edit`} style={{ textDecoration: 'none' }}>
          <PostHeadLine>{draftContent.title}</PostHeadLine>
        </Link>
        <Tagline>{draftContent.tagline}</Tagline>
        <ApplyRow style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 11 }}>
          <Date>{createdAt.format("MMM, DD YYYY")}</Date>
          <TagList>{draftContent.interests?.length && draftContent.interests[0]?.name}</TagList>
          <ApplyRow>
            <SmallDots />
            <SmallDots />
            <SmallDots />
          </ApplyRow>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
            <PublishButton>
              <PublishLabel>Publish</PublishLabel>
            </PublishButton>
          </div>
        </ApplyRow>
      </ApplyColumn>
      <div style={{ borderBottom: '1px solid black', marginTop: 24 }} />
    </div>
  );
};

DraftTile.propTypes = {
  draftContent: PropTypes.shape({
    interests: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default DraftTile;
