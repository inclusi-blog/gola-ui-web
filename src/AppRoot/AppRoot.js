import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { I18nextProvider } from 'react-i18next';
import LoggedInProvider from 'context-providers/loggedin-provider/LoggedInProvider';
import AuthModalProvider from 'context-providers/auth-modal-provider';
import AppContent from '../base-app/AppContent';
import LazyLoader from '../LazyLoader';
import BaseLayers from './layers/BaseLayer';
import i18n from '../i18n/i18n';

const AppRoot = () => {
  return (
    <BaseLayers>
      <AuthModalProvider>
        <LoggedInProvider>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={<LazyLoader />}>
              <AppContent />
            </Suspense>
          </I18nextProvider>
        </LoggedInProvider>
      </AuthModalProvider>
    </BaseLayers>
  );
};

export default hot(AppRoot);
