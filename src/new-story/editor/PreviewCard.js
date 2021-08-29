import React, { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import PreviewPicker from 'assets/images/preview-pen.svg';
import ajax from 'helpers/ajaxHelper';
import { DeleteInterest, GetInterests, UpdateInterests, UpdatePreviewImage } from '../draft.service';
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

const PreviewCard = ({
  title,
  onChangeTagline,
  postID,
  previewImage,
  setPreviewImage,
  selectedFile,
  setSelectedFile,
  selectedTags,
  setSelectedTags,
  tagline,
}) => {
  const [showInterestTagPills, setShowInterestTagPills] = useState(false);
  const [interestInputValue, setInterestInputValue] = useState('');
  const [suggestionBoxPosition, setSuggestionBoxPosition] = useState({ top: 0, left: 0 });
  const pickerRef = useRef(null);
  const [interestStore, setInterestStore] = useState([]);
  const [interestsList, setInterestsList] = useState([]);
  const ref = useRef(null);
  const [, setErrorStatus] = useState(false);

  const GetSearchedInterests = (searchedValue) => {
    GetInterests(searchedValue, selectedTags)
      .then(({ data }) => {
        if (data && data.length) {
          setInterestStore(data);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        if (err?.response?.data?.errorCode === 'ERR_POST_PAYLOAD_INVALID') {
          setInterestStore([]);
        }
      });
  };

  useEffect(() => {
    setInterestsList(interestStore.filter((item) => item.name.toLowerCase().includes(interestInputValue)).slice(0, 4));
  }, [interestStore]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedGetInterest = useCallback(
    debounce((eventData) => GetSearchedInterests(eventData), 500),
    [selectedTags]
  );

  const updateImage = (previewImageUrl) => {
    UpdatePreviewImage(postID, previewImageUrl)
      .then(({ data }) => {
        if (data.status === 'succes') {
          setErrorStatus(null);
        }
      })
      .catch(() => {
        setErrorStatus(true);
      });
  };

  const onClickInterest = (selectedInterest) => {
    UpdateInterests(postID, selectedInterest)
      .then(() => setErrorStatus(false))
      .catch(() => setErrorStatus(true));
  };

  useEffect(() => {
    if (ref && ref.current) {
      const boundingClientRect = ref.current.getBoundingClientRect();
      const { top, left } = boundingClientRect;
      setSuggestionBoxPosition({ top, left });
    }
  }, [ref.current]);

  useEffect(() => {
    if (interestInputValue.length === 0) {
      setInterestStore([]);
    }
  }, [interestInputValue]);

  const removeSelectedTag = (selectedIndex) => {
    setSelectedTags(selectedTags.filter((item, index) => selectedIndex !== index));
    DeleteInterest(postID, selectedTags[selectedIndex])
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('deleted interest connection');
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.log(err)
      );
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
          updateImage(imageUrl);
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
          <input
            type="file"
            style={{ display: 'none' }}
            ref={pickerRef}
            accept=".jpg,.jpeg,.png"
            onChange={(event) => onInputFileChange(event)}
          />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
          <img
            onClick={() => pickerRef.current.click()}
            src={PreviewPicker}
            alt="preview picker"
            style={{ marginRight: 6, marginBottom: 6 }}
          />
        </If>
      </PreviewImageContainer>
      <PreviewContentContainer>
        <PreviewTitleText wordsCount={title.length}>{title}</PreviewTitleText>
        <TaglineInput
          placeholder="Add tagline"
          showPen={tagline?.length}
          value={tagline}
          onChange={({ target }) => {
            onChangeTagline(target.value);
          }}
        />
        <If condition={selectedTags.length}>
          <InterestPillsContainer>
            {selectedTags.map((item, index) => (
              <InterestTag key={item} onClick={() => removeSelectedTag(index)}>
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
              delayedGetInterest(event.target.value);
            }}
          />
          <If condition={interestInputValue.length}>
            <InterestSuggestionsBox isVisible left={suggestionBoxPosition.left} top={suggestionBoxPosition.top + 30}>
              {interestsList.map((item, index) => (
                <InterestListItem
                  onClick={() => {
                    setSelectedTags([...selectedTags, item.name]);
                    onClickInterest(item.name);
                    setInterestInputValue('');
                    setShowInterestTagPills(false);
                  }}
                  key={item.name.toString()}
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

PreviewCard.defaultProps = {
  selectedFile: null,
};

PreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeTagline: PropTypes.func.isRequired,
  postID: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  setPreviewImage: PropTypes.func.isRequired,
  selectedFile: PropTypes.shape({
    fileName: PropTypes.string,
  }),
  setSelectedFile: PropTypes.func.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedTags: PropTypes.func.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default PreviewCard;
