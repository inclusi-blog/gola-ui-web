import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import BaseLayers from './layers/BaseLayer';
import LazyLoader from './LazyLoader';

const PostLogin = lazy(() => import('./App'));

const AppRoot = () => {
  return (
    <BaseLayers>
      <Suspense fallback={<LazyLoader />}>
        <PostLogin />
      </Suspense>
    </BaseLayers>
  );
};

export default hot(AppRoot);
