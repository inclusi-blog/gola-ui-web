import { useContext } from 'react';
import FeedSortContext from '../context-providers/feed-sort-provider/FeedSortContext';

const useGeneralFeedSorter = () => {
  const { generalFeedSorter, setGeneralFeedSorter, generalFeedSortList } = useContext(FeedSortContext);

  const onChangeSort = (sortValue) => {
    setGeneralFeedSorter(sortValue);
  };

  return { selectedSort: generalFeedSorter, onChangeSort, feedList: generalFeedSortList };
};

export default useGeneralFeedSorter;
