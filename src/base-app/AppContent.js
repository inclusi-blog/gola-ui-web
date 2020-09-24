import React, { lazy, useContext } from 'react';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import Header from '../app-header/post-login/Header';
import PreLoginHeader from '../app-header/pre-login';
import AppContentWrapper from './AppContent.style';

const PostLogin = lazy(() => import('../App'));

const AppContent = () => {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    <AppContentWrapper>
      <If condition={isLoggedIn}>
        <Header />
        <Else />
        <PreLoginHeader />
      </If>
      <PostLogin />
    </AppContentWrapper>
  );
};

export default AppContent;
