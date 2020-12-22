import React from 'react';
import PropTypes from 'prop-types';
import {
  ApplyRow,
  ApplyColumn,
  DraftContent,
  Tagline,
  Date,
  TagList,
  SmallDots,
  PublishButton,
  PublishLabel,
} from './DraftList.style';

const DraftList = ({ draftContent }) => {
  const gettingTagList = () => {
    return draftContent.interestTag.map((tag) => {
      return <TagList>{tag}</TagList>;
    });
  };
  return (
    <div>
      <ApplyColumn>
        <DraftContent>{draftContent.title}</DraftContent>
        <Tagline>{draftContent.tagline}</Tagline>
        <ApplyRow style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 11 }}>
          <Date>{draftContent.createdDate}</Date>
          {gettingTagList()}
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
DraftList.propTypes = {
  draftContent: PropTypes.shape({
    interestTag: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
  }),
};
export default DraftList;
