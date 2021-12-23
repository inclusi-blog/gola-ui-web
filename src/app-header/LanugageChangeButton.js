import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, useMediaQuery} from "@mui/material";

const LanguageChangeButton = () => {
    const matches = useMediaQuery('(max-width:768px)');
    const {i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('tam');

    const toggleLanguage = () => {
        if (selectedLanguage === 'en') {
            return 'tam';
        }
        return 'en';
    };

    return (
        <Button
            onClick={async () => {
                const toggledLanguage = toggleLanguage();
                await i18n.changeLanguage(toggledLanguage);
                setSelectedLanguage(toggledLanguage);
            }}
            variant="text"
            style={{
                color: '#03527C',
                backgroundColor: '#E6F3FA',
                borderRadius: 8,
                height: 23,
                marginLeft: matches ? 33 : 83
            }}
        >
            {selectedLanguage === 'en' ? 'தமிழ்' : 'ENG'}
        </Button>
    );
};

export default LanguageChangeButton;
