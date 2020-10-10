import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PreviewPicker from 'assets/images/preview-pen.svg';
import {
  AddInterestTagText,
  AddTagButton,
  HorizontalLine,
  InterestListItem,
  InterestListItemText,
  InterestPillsContainer,
  InterestsInputs,
  InterestSuggestionsBox,
  InterestTag,
  InterestTagRow,
  InterestTagText,
  PreviewContainer,
  PreviewContentContainer,
  PreviewImageContainer,
  PreviewTitleText,
  TaglineInput,
  VerticalLine,
} from './PreviewCard.style';

const PreviewCard = ({ title }) => {
  const [tagline, setTagline] = useState('');
  const [showInterestTagPills, setShowInterestTagPills] = useState(false);
  const [interestInputValue, setInterestInputValue] = useState('');
  const [suggestionBoxPosition, setSuggestionBoxPosition] = useState({ top: 0, left: 0 });
  const interestStore = [
    'Arasiyal',
    'Vilayattu',
    'Maruthuvam',
    'Poriyiyal',
    'Varthagam',
    'Ulaga arasiyal',
    'Kattamaippu',
  ];
  const [interestsList, setInterestsList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      const boundingClientRect = ref.current.getBoundingClientRect();
      const { top, left } = boundingClientRect;
      setSuggestionBoxPosition({ top, left });
    }
  }, [ref.current]);

  const removeSelectedTag = (selectedIndex) => {
    setSelectedTags(selectedTags.filter((item, index) => selectedIndex !== index));
  };

  return (
    <PreviewContainer>
      <PreviewImageContainer>
        <img src={PreviewPicker} alt="preview picker" style={{ marginRight: 6, marginBottom: 6 }} />
      </PreviewImageContainer>
      <PreviewContentContainer>
        <PreviewTitleText wordsCount={title.length}>{title}</PreviewTitleText>
        <TaglineInput
          placeholder="Add tagline"
          showPen={tagline.length}
          onChange={({ target }) => setTagline(target.value)}
        />
        <If condition={selectedTags.length}>
          <InterestPillsContainer>
            {selectedTags.map((item, index) => (
              <InterestTag key={item.toString()} onClick={() => removeSelectedTag(index)}>
                <InterestTagText>{item}</InterestTagText>
              </InterestTag>
            ))}
          </InterestPillsContainer>
        </If>
        <If condition={showInterestTagPills}>
          <InterestsInputs
            autoFocus
            value={interestInputValue}
            ref={ref}
            onChange={(event) => {
              setInterestInputValue(event.target.value);
              setInterestsList(
                interestStore.filter((item) => item.toLowerCase().includes(event.target.value)).slice(0, 4)
              );
            }}
          />
          <If condition={interestInputValue.length}>
            <InterestSuggestionsBox isVisible left={suggestionBoxPosition.left} top={suggestionBoxPosition.top + 30}>
              {interestsList.map((item, index) => (
                <InterestListItem
                  onClick={() => {
                    setSelectedTags([...selectedTags, item]);
                    setInterestInputValue('');
                    setShowInterestTagPills(false);
                  }}
                  key={item.toString()}
                  paddingTop={index === 0 ? 20 : 8}
                  height={index === 0 ? 54 : 42}
                  isLast={false}
                >
                  <InterestListItemText>{item}</InterestListItemText>
                </InterestListItem>
              ))}
              <InterestListItem
                paddingTop={8}
                height={42}
                onClick={() => {
                  setSelectedTags([...selectedTags, interestInputValue]);
                  setShowInterestTagPills(false);
                  setInterestInputValue('');
                }}
                isLast
              >
                <InterestListItemText>{interestInputValue}</InterestListItemText>
              </InterestListItem>
            </InterestSuggestionsBox>
          </If>
          <Else />
          <If condition={selectedTags.length < 5}>
            <InterestTagRow
              onClick={() => {
                setShowInterestTagPills(true);
              }}
            >
              <AddTagButton>
                <VerticalLine />
                <HorizontalLine />
              </AddTagButton>
              <AddInterestTagText>Add Tag</AddInterestTagText>
            </InterestTagRow>
          </If>
        </If>
      </PreviewContentContainer>
    </PreviewContainer>
  );
};

PreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PreviewCard;
