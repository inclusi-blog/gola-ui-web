import React from 'react';
import { SuggestionOuterWrapper, SuggestionWord, SuggestionWordWrapper } from './TranslationSuggestionBar.style';

const TranslationSuggestionBar = () => {
  const suggestions = [
    {
      value: 'எழுகிறது',
      isSelected: true,
      id: 1,
    },
    {
      value: 'மென்சுவடி',
      isSelected: false,
      id: 2,
    },
    {
      value: 'அரசியல்',
      isSelected: false,
      id: 3,
    },
    {
      value: 'விளையாட்டு',
      isSelected: false,
      id: 4,
    },
    {
      value: 'கருபழனியப்பன்',
      isSelected: false,
      id: 5,
    },
    {
      value: 'கருபழனியப்பன்',
      isSelected: false,
      id: 6,
    },
    {
      value: 'கருபழனியப்பன்',
      isSelected: false,
      id: 7,
    },
    {
      value: 'கருபழனியப்பன்',
      isSelected: false,
      id: 8,
    },
  ];

  const getSuggestions = () => {
    return suggestions.map((suggestion) => {
      return (
        <SuggestionWordWrapper key={suggestion.id} selected={suggestion.isSelected}>
          <SuggestionWord selected={suggestion.isSelected}>{`${suggestion.id}.${suggestion.value}`}</SuggestionWord>
        </SuggestionWordWrapper>
      );
    });
  };

  return <SuggestionOuterWrapper autoFocus>{getSuggestions()}</SuggestionOuterWrapper>;
};

export default TranslationSuggestionBar;
