import React from 'react';
import Pill from 'common-components/Pill';
import { useTranslation } from 'react-i18next';
import { BigText, Para, PillContainer } from './Welcome.Style';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 331,
          marginTop: 65,
        }}
      >
        <BigText>{t('welcome.title')}</BigText>
        <Para>{t('welcome.sentence')}</Para>
      </div>
      <PillContainer>
        <Pill isSelected />
      </PillContainer>
    </div>
  );
};
export default Welcome;
