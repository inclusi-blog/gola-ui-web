import React, { memo } from 'react';
import LazyLoaderContainer from './LazyLoader.style';
import Loader from './process-loader/Loader';

const LazyLoader = () => {
  return (
    <LazyLoaderContainer>
      <Loader size={200} />
    </LazyLoaderContainer>
  );
};

export default memo(LazyLoader);
