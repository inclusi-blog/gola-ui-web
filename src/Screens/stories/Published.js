import React, { useCallback, useEffect, useState } from 'react';
import { CancelToken } from 'helpers/ajaxHelper';
import PublishedPostTile from 'common-components/PublishedPostTile';
import { GetPublishedPosts } from '../postView/post.service';

const Published = () => {
  const [postDetails, setPostDetails] = useState([]);

  const cancelTokens = [];
  const cleanup = useCallback(() => {
    if (cancelTokens.length > 0) {
      const cancelToken = cancelTokens.pop();
      cancelToken.cancel();
    }
  }, []);

  const getPublishedPosts = () => {
    const cancelToken = CancelToken();
    GetPublishedPosts(cancelToken, 0, 5)
      .then(({ data }) => {
        setPostDetails(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('unable to fetch drafts', err);
      });
    cancelTokens.push(cancelToken);
  };

  useEffect(() => {
    getPublishedPosts();
    return cleanup;
  }, [cleanup]);

  const getPostDetails = () => {
    return postDetails?.map((post, index) => {
      return <PublishedPostTile details={post} />;
    });
  };

  return <div>{getPostDetails()}</div>;
};

export default Published;
