import React, { useEffect, useRef, useState } from 'react';
import { Editor, Range } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import { Portal } from './Components';
import { SuggestionOuterWrapper, SuggestionWord, SuggestionWordWrapper } from './TranslationSuggestionBar.style';

const TranslationSuggestionBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([
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
  ]);
  // eslint-disable-next-line no-unused-vars
  const [selectedValue, setSelectedValue] = useState('');
  const ref = useRef();
  const editor = useSlate();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      // eslint-disable-next-line no-console
      console.log('came to return');
      return;
    }

    if (!ReactEditor.isFocused(editor) || Range.isCollapsed(selection) || Editor.string(editor, selection) === '') {
      // eslint-disable-next-line no-console
      console.log('came here');
      el.removeAttribute('style');
      return;
    }
    // eslint-disable-next-line no-console
    console.log('came outside if');
    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = 1;
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
  });

  const getSuggestions = () => {
    return suggestions.map((suggestion, index) => {
      return (
        <SuggestionWordWrapper
          key={suggestion.id}
          selected={suggestion.isSelected}
          onClick={() => {
            setSelectedIndex(index);
            setSelectedValue(suggestion.value);
          }}
        >
          <SuggestionWord selected={suggestion.isSelected}>{`${suggestion.id}.${suggestion.value}`}</SuggestionWord>
        </SuggestionWordWrapper>
      );
    });
  };

  const ReduceOne = () => {
    if (selectedIndex === 0) {
      setSuggestions(
        suggestions.map((item, index) => {
          if (index === suggestions.length - 1) {
            return { ...item, isSelected: true };
          }
          return { ...item, isSelected: false };
        })
      );
      setSelectedIndex(suggestions.length - 1);
      return;
    }
    setSuggestions(
      suggestions.map((item, index) => {
        if (index === selectedIndex - 1) {
          return { ...item, isSelected: true };
        }
        return { ...item, isSelected: false };
      })
    );
    setSelectedIndex(selectedIndex - 1);
  };

  const IncreaseOne = () => {
    if (selectedIndex === suggestions.length - 1) {
      setSuggestions(
        suggestions.map((item, index) => {
          if (index === 0) {
            return { ...item, isSelected: true };
          }
          return { ...item, isSelected: false };
        })
      );
      setSelectedIndex(0);
      return;
    }
    setSuggestions(
      suggestions.map((item, index) => {
        if (index === selectedIndex + 1) {
          return { ...item, isSelected: true };
        }
        return { ...item, isSelected: false };
      })
    );
    setSelectedIndex(selectedIndex + 1);
  };

  // eslint-disable-next-line no-console
  return (
    <Portal>
      <SuggestionOuterWrapper
        tabIndex="0"
        ref={ref}
        autoFocus
        onKeyDown={(event) => {
          event.preventDefault();
          if (event.which === 38) {
            // up-arrow
            ReduceOne();
            return;
          }
          if (event.which === 40) {
            // down arrow
            IncreaseOne();
            return;
          }
          if (event.which === 13) {
            // on enter
            setSelectedValue(suggestions[selectedIndex].value);
            return;
          }
          if (event.which === 37) {
            // left arrow
            ReduceOne();
            return;
          }
          if (event.which === 39) {
            // right arrow
            IncreaseOne();
          }
        }}
      >
        {getSuggestions()}
      </SuggestionOuterWrapper>
    </Portal>
  );
};

export default TranslationSuggestionBar;
