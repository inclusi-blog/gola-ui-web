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

  const changeRouteName = useCallback((id) => {
    setIsInitiallySaved(true);
    setDraftID(id);
    window.history.replaceState(null, 'Draft', `/p/${id}/edit`);
  }, [setDraftID, setIsInitiallySaved]);

  const onChangeContent = useCallback((postData) => {
    SaveDraft({ post: postData, commandToRun: !draftID ? (value) => changeRouteName(value) : () => {} });
  }, [SaveDraft, changeRouteName, draftID]);

  useDebouncedEffect(() => {
    if (Object.keys(editorData).length !== 1){
      onChangeContent(editorData);
    }
  }, [editorData], 2000);
};

export default useSaveDraft;
