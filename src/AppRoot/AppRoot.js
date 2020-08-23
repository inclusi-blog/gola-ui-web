import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { I18nextProvider } from 'react-i18next';
import Header from '../app-header/Heder';
import LazyLoader from '../LazyLoader';
import BaseLayers from './layers/BaseLayer';
import i18n from '../i18n/i18n';

const PostLogin = lazy(() => import('../App'));

const AppRoot = () => {
  return (
    <BaseLayers>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<LazyLoader />}>
          <Header />
          <PostLogin />
        </Suspense>
      </I18nextProvider>
    </BaseLayers>
  );
};

export default hot(AppRoot);
