import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageButtonWrapper, LanguageChangeText } from './LaungageChangeButton.style';

const LanguageChangeButton = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('tam');

  const toggleLanguage = () => {
    if (selectedLanguage === 'en') {
      return 'tam';
    }
    return 'en';
  };

  return (
    <LanguageButtonWrapper
      onClick={async () => {
        const toggledLanguage = toggleLanguage();
        await i18n.changeLanguage(toggledLanguage);
        setSelectedLanguage(toggledLanguage);
      }}
    >
      <LanguageChangeText>ENG</LanguageChangeText>
    </LanguageButtonWrapper>
  );
};

export default LanguageChangeButton;
