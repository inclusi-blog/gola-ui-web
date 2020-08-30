import React, { useState } from 'react';
import Pill from 'common-components/Pill';
import { useTranslation } from 'react-i18next';
import { TitleText, TitleContent, PillContainer } from './Welcome.Style';

const Welcome = () => {
  const [pills, setPills] = useState([
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 1,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
      id: 2,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
      id: 3,
    },
    {
      value: 'அரசியல்',
      isSelected: false,
      id: 4,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
      id: 5,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
      id: 6,
    },
    {
      value: 'அரசியல்',
      isSelected: false,
      id: 7,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
      id: 8,
    },
    {
      value: ' விளையாட்டு ',
      isSelected: false,
      id: 9,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
      id: 11,
    },
    {
      value: 'அரசியல்',
      isSelected: false,
      id: 12,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: false,
      id: 13,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
      id: 14,
    },
  ]);
  const { t, i18n } = useTranslation();

  const getInterestPills = () => {
    return pills.map(({ value, isSelected, id }) => (
      <Pill
        key={id}
        interest={value}
        isSelected={isSelected}
        onSelectInterest={(selectedId) => {
          const updatedPills = pills.map((singlePill) =>
            singlePill.id === selectedId ? { ...singlePill, isSelected: !singlePill.isSelected } : singlePill
          );
          setPills(updatedPills);
        }}
        id={id}
      />
    ));
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
        <TitleText lang={i18n.language}>{t('welcome.title')}</TitleText>
        <TitleContent lang={i18n.language}>{t('welcome.sentence')}</TitleContent>
      </div>
      <PillContainer>{getInterestPills()}</PillContainer>
    </div>
  );
};

export default Welcome;
