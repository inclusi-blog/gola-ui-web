import { debounce } from "lodash";
import { useCallback } from "react";
import ajax from "../helpers/ajaxHelper";
import useDraft from "./useDraft";

const useSaveDraft = () => {
  const {
    setIsSaving,
    setIsInitiallySaved,
    setDraftID,
    draftID
  } = useDraft();
  console.log('this is draft id from hook', draftID);
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
    console.log('this is draft id ', draftID);
    if (!draftID) {
      SaveDraft({
        post: postData,
        commandToRun: (id) => changeRouteName(id),
      });
      return;
    }
    SaveDraft({ post: postData });
  }, [SaveDraft, changeRouteName, draftID]);

  const delayedHandleChangeContent = useCallback(
    debounce((eventData) => onChangeContent(eventData), 2000),
    [draftID]
  );

  return  {
    save: delayedHandleChangeContent
  };
};

export default useSaveDraft;
