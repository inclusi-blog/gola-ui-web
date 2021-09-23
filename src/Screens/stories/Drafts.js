import React, { useCallback, useEffect, useState } from 'react';
import DraftTile from 'common-components/DraftTile';
import { CancelToken } from "helpers/ajaxHelper";
import { GetDrafts } from "../../new-story/draft.service";

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);
  const cancelTokens = [];
  const cleanup = useCallback(() => {
    if (cancelTokens.length > 0) {
      const cancelToken = cancelTokens.pop();
      cancelToken.cancel();
    }
  }, []);
  
  const getDrafts = () => {
    const cancelToken = CancelToken();
    GetDrafts(cancelToken, 0, 5).then(({ data }) => {
      setDrafts(data);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log('unable to fetch drafts', err);
    });
    cancelTokens.push(cancelToken);
  };

  useEffect(() => {
    getDrafts();
    return cleanup;
  }, [cleanup]);

  const getDraftList = () => {
    return drafts.map((draft) => <DraftTile draftContent={draft} />);
  };

  return <div>{getDraftList()}</div>;
};

export default Drafts;
