import React, { useState } from 'react';
import DraftTile from 'common-components/DraftTile';

const Drafts = () => {
  const [drafts] = useState([
    {
      title: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ -  ல்லியில் முகாமிட்ட சச்சின் பைலட்',
      tagline: 'Tagline or starting line',
      createdDate: 'Jul 8,2020',
      interestTag: ['Tag1', 'Tag2'],
    },
    {
      title: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ -  ல்லியில் முகாமிட்ட சச்சின் பைலட்',
      tagline: 'Tagline or starting line',
      createdDate: 'Jul 8,2020',
      interestTag: ['Tag1', 'Tag2'],
    },
  ]);

  const getDraftList = () => {
    return drafts.map((draft) => <DraftTile draftContent={draft} />);
  };

  return <div>{getDraftList()}</div>;
};

export default Drafts;
