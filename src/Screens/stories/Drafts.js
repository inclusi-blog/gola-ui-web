import React, { useEffect, useState } from 'react';
import DraftTile from 'common-components/DraftTile';
import { GetDrafts } from "../../new-story/draft.service";

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);

  const getDrafts = () => {
    GetDrafts(0, 5).then(({ data }) => {
      setDrafts(data);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log('unable to fetch drafts', err);
    });
  };

  useEffect(() => {
    getDrafts();
  }, []);

  const getDraftList = () => {
    return drafts.map((draft) => <DraftTile draftContent={draft} />);
  };

  return <div>{getDraftList()}</div>;
};

export default Drafts;
