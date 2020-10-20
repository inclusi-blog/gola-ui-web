import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PreviewPicker from 'assets/images/preview-pen.svg';
import GetInterests from '../draft.service';
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
import ajax from '../../helpers/ajaxHelper';

const PreviewCard = ({ title }) => {
  const [tagline, setTagline] = useState('');
  const [showInterestTagPills, setShowInterestTagPills] = useState(false);
  const [interestInputValue, setInterestInputValue] = useState('');
  const [suggestionBoxPosition, setSuggestionBoxPosition] = useState({ top: 0, left: 0 });
  const pickerRef = useRef(null);
  const [interestStore, setInterestStore] = useState([]);
  const [interestsList, setInterestsList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const ref = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    GetInterests()
      .then(({ data }) => {
        if (data && data.length) {
          setInterestStore(data);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
      });
  }, []);

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

  useEffect(() => {
    if (selectedFile) {
      const fromData = new FormData();
      fromData.append('file', selectedFile, selectedFile.fileName);

      ajax
        .post('/v1/upload', fromData, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            // eslint-disable-next-line no-underscore-dangle
            'Content-Type': `multipart/form-data; boundary=${fromData._boundary}`,
          },
        })
        .then(({ data: steam }) => {
          const imageUrl = steam.filePath.replace(
            'https://golaimage.s3.ap-south-1.amazonaws.com',
            'https://d14r87p68zn22t.cloudfront.net'
          );
          setPreviewImage(imageUrl);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }, [selectedFile]);

  const onInputFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <PreviewContainer>
      <PreviewImageContainer>
        <If condition={previewImage}>
          <img src={previewImage} alt="" style={{ width: 163, height: 163 }} />
          <Else />
          <input type="file" style={{ display: 'none' }} ref={pickerRef} accept=".jpg,.jpeg,.png" onChange={(event) => onInputFileChange(event)} />
          <img onKeyDown={() => {}} onClick={() => pickerRef.current.click()} src={PreviewPicker} alt="preview picker" style={{ marginRight: 6, marginBottom: 6 }} />
        </If>
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
              <InterestTag key={item.id} onClick={() => removeSelectedTag(index)}>
                <InterestTagText>{item.name}</InterestTagText>
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
              const found = interestStore.filter((item) => selectedTags.indexOf(item) === -1);
              setInterestsList(
                found.filter((item) => item.name.toLowerCase().includes(event.target.value)).slice(0, 4)
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
                  key={item.id.toString()}
                  paddingTop={index === 0 ? 20 : 8}
                  height={index === 0 ? 54 : 42}
                  isLast={false}
                >
                  <InterestListItemText>{item.name}</InterestListItemText>
                </InterestListItem>
              ))}
              <InterestListItem
                paddingTop={8}
                height={42}
                onClick={() => {
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
