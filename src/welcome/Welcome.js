import React from 'react';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('welcome.title')}</p>
    </div>
  );
};
export default Welcome;
