import React from 'react';
import Pill from 'common-components/Pill';
import { useTranslation } from 'react-i18next';
import { TitleText, TitleContent, PillContainer } from './Welcome.Style';

const Welcome = () => {
  const pills = [
    {
      value: 'அரசியல்',
      isSelected: true,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
    },
    {
      value: 'அரசியல்',
      isSelected: false,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
    },
    {
      value: 'அரசியல்',
      isSelected: false,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
    },
    {
      value: ' விளையாட்டு ',
      isSelected: false,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
    },
    {
      value: 'அரசியல்',
      isSelected: false,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
    },
  ];
  const { t } = useTranslation();

  const getIntersetPills = () => {
    return pills.map(({ value, isSelected }) => <Pill interest={value} isSelected={isSelected} />);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 304,
          marginTop: 65,
        }}
      >
        <TitleText>{t('welcome.title')}</TitleText>
        <TitleContent>{t('welcome.sentence')}</TitleContent>
      </div>
      <PillContainer>{getIntersetPills()}</PillContainer>
    </div>
  );
};

export default Welcome;
