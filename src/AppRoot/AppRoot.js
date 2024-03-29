import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { I18nextProvider } from 'react-i18next';
import LoggedInProvider from 'context-providers/loggedin-provider/LoggedInProvider';
import AuthModalProvider from 'context-providers/auth-modal-provider';
import NewStoryProvider from 'context-providers/new-story-provider/NewStoryProvider';
import UserProfileProvider from 'context-providers/UserProfileProvider/UserProfileProvider';
import FeedSortProvider from '../context-providers/feed-sort-provider/FeedSortProvider';
import BaseLayers from './layers/BaseLayer';
import AppContent from '../base-app/AppContent';
import LazyLoader from '../LazyLoader';
import i18n from '../i18n/i18n';

const AppRoot = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <LoggedInProvider>
        <BaseLayers>
          <AuthModalProvider>
            <FeedSortProvider>
              <UserProfileProvider>
                <NewStoryProvider>
                  <Suspense fallback={<LazyLoader />}>
                    <AppContent />
                  </Suspense>
                </NewStoryProvider>
              </UserProfileProvider>
            </FeedSortProvider>
          </AuthModalProvider>
        </BaseLayers>
      </LoggedInProvider>
    </I18nextProvider>
  );
};

export default hot(AppRoot);
