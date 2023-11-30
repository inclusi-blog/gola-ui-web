import { useCallback } from "react";
import ajax from "../helpers/ajaxHelper";
import useDebouncedEffect from "./useDebounceEffect";
import useDraft from "./useDraft";

const useSaveDraft = ({editorData}) => {
  const {
    setIsSaving,
    setIsInitiallySaved,
    setDraftID,
    draftID
  } = useDraft();

  const SaveDraft = ({ post, commandToRun = () => {} }) => {
    setIsSaving(true);
    if (!draftID) {
      ajax
        .post('/post/v1/draft', {
          data: post,
        })
        .then(({ data }) => {
          setDraftID(data.draft_id);
          commandToRun(data.draft_id);
          setIsSaving(false);
        })
        .catch(() => {
          setIsSaving(false);
        });
      return;
    }
    ajax
      .put(`/post/v1/draft?draft=${draftID}`, {
        data: post,
      })
      .then(() => {
        setIsSaving(false);
        commandToRun();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
        setIsSaving(false);
      });
  };

  const changeRouteName = (id) => {
    setIsInitiallySaved(true);
    setDraftID(id);
    window.history.replaceState(null, 'Draft', `/p/${id}/edit`);
  };

  const onChangeContent = useCallback((postData) => {
    SaveDraft({ post: postData, commandToRun: draftID ? () => {} : changeRouteName });
  }, [SaveDraft, changeRouteName, draftID]);

  useDebouncedEffect(() => {
    if (Object.keys(editorData).length > 0){
      onChangeContent(editorData);
    }
  }, [editorData], 2000);
};

export default useSaveDraft;
