import { useContext } from 'react';
import NewStoryContext from '../context-providers/new-story-provider/NewStoryContext';
import { GetPreviewDraft, PublishPost } from '../new-story/draft.service';

const useDraft = () => {
  const {
    setIsInitiallySaved,
    isInitiallySaved,
    isSaving,
    setIsSaving,
    draftID,
    setDraftID,
    isPublished,
    setIsPublished,
    previewDraft,
    setPreviewDraft,
    errorMessage,
    setErrorMessage,
  } = useContext(NewStoryContext);

  const PublishDraft = () => {
    PublishPost(draftID)
      .then(({ data }) => {
        if (data.status === 'success') {
          // eslint-disable-next-line no-console
          console.log('published');
        }
      })
      .catch((err) => {
        setErrorMessage(err?.response?.data?.errorCode);
      });
  };

  const FetchPreviewDraft = () => {
    GetPreviewDraft(draftID)
      .then(({ data }) => {
        if (data) {
          setPreviewDraft(data);
        }
        setPreviewDraft(data);
      })
      .catch((err) => {
        if (err?.response?.data?.additionalData) {
          setErrorMessage(err?.response?.data?.additionalData);
        }
      });
  };

  return {
    setIsInitiallySaved,
    isInitiallySaved,
    isSaving,
    setIsSaving,
    draftID,
    setDraftID,
    isPublished,
    setIsPublished,
    previewDraft,
    setPreviewDraft,
    errorMessage,
    setErrorMessage,
    FetchPreviewDraft,
    PublishDraft,
  };
};

export default useDraft;
