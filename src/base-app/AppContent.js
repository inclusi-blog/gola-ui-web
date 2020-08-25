import React, { lazy } from 'react';
import Header from '../app-header/Heder';

const PostLogin = lazy(() => import('../App'));

const AppContent = () => {
  return (
    <>
      <Header />
      <PostLogin />
    </>
  );
};

export default AppContent;
