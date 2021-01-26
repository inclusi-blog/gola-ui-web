import React, { useState } from 'react';
import PropTypes from 'prop-types';
import feedSorter from '../../constants/feedSorter';
import Context from './FeedSortContext';

const FeedSortProvider = ({ children }) => {
  const [generalFeedSorter, setGeneralFeedSorter] = useState(feedSorter.TOP);
  const generalFeedSortList = [
    feedSorter.TOP,
    feedSorter.BEST,
    feedSorter.HOT,
    feedSorter.RECENT,
    feedSorter.PERSONALIZED,
  ];

  return (
    <Context.Provider value={{ generalFeedSorter, setGeneralFeedSorter, generalFeedSortList }}>
      {children}
    </Context.Provider>
  );
};

FeedSortProvider.propTypes = {
  children: PropTypes.element,
};

FeedSortProvider.defaultProps = {
  children: null,
};

export default FeedSortProvider;
