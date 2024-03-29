import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PreviewPicker from 'assets/images/preview-pen.svg';
import {
  GetInterests,
  GetPreSignPreviewImageURL,
  SyncPreviewImage,
  UpdateInterests,
  UploadPreviewImage,
} from '../draft.service';
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
  draftID,
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

  const GetSearchedInterests = () => {
    GetInterests()
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

  const onClickInterest = (tags) => {
    UpdateInterests(draftID, tags)
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
      setInterestsList([]);
      return;
    }
    const unselected = interestStore.filter((item) => selectedTags.indexOf(item) === -1);
    setInterestsList(unselected.filter((item) => item.name.toLowerCase().includes(interestInputValue)).slice(0, 4));
  }, [interestInputValue]);

  useEffect(() => {
    GetSearchedInterests();
  }, []);

  const removeSelectedTag = (selectedIndex) => {
    setSelectedTags(selectedTags.filter((item, index) => selectedIndex !== index));
  };

  useEffect(() => {
    if (selectedTags.length === 5) {
      onClickInterest(selectedTags);
    }
  }, [selectedTags]);

  const onInputFileChange = (event) => {
    const file = event.target.files[0];
    const fileExtension = file.name.split('.').pop();
    GetPreSignPreviewImageURL(fileExtension, draftID)
      .then(({ data }) => {
        UploadPreviewImage(data.url, file)
          .then(() => {
            const url = data.url.split('?')[0];
            const urlPaths = url.split('/');
            const uploadID = urlPaths.slice(urlPaths.length - 3);
            SyncPreviewImage(uploadID.join('/'), draftID)
              .then(() => {
                const reader = new FileReader();
                reader.onload = function (event) {
                  setSelectedFile(event.target.result);
                  setPreviewImage(event.target.result);
                };
                reader.readAsDataURL(file);
                setErrorStatus(false);
              })
              .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err);
                setErrorStatus(true);
              });
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
            setErrorStatus(true);
          });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setErrorStatus(true);
      });
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
            onChange={onInputFileChange}
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
        <If condition={selectedTags?.length}>
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
          <If condition={selectedTags?.length < 5}>
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
  tagline: '',
  draftID: '',
};

PreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeTagline: PropTypes.func.isRequired,
  draftID: PropTypes.string,
  previewImage: PropTypes.string.isRequired,
  setPreviewImage: PropTypes.func.isRequired,
  selectedFile: PropTypes.string,
  setSelectedFile: PropTypes.func.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setSelectedTags: PropTypes.func.isRequired,
  tagline: PropTypes.string,
};

export default PreviewCard;
