import ajax from '../helpers/ajaxHelper';
import {
  DELETE_INTEREST,
  GET_DRAFT,
  GET_INTERESTS,
  PREVIEW_DRAFT,
  PUBLISH_DRAFT,
  SAVE_INTERESTS,
  SAVE_PREVIEW_IMAGE,
  SAVE_TAGLINE,
} from '../Config/api.routes.config';

export const GetInterests = (searchKeyWord, selectedTags) =>
  ajax.post(GET_INTERESTS, { searchKeyword: searchKeyWord, selectedTags });

export const SaveTagline = (postID, tagline) =>
  ajax.post(SAVE_TAGLINE, { draft_id: postID, tagline, user_id: 'some-user' });

export const UpdateInterests = (postID, interest) =>
  ajax.post(SAVE_INTERESTS, {
    user_id: 'some-user',
    draft_id: postID,
    interest,
  });

export const UpdatePreviewImage = (draftID, previewImage) =>
  ajax.post(SAVE_PREVIEW_IMAGE, {
    draft_id: draftID,
    user_id: 'some-user',
    preview_image: previewImage,
  });

export const PublishPost = (draftID) =>
  ajax.post(PUBLISH_DRAFT, {
    draft_id: draftID,
    user_id: 'some-user',
  });

export const DeleteInterest = (draftId, interest) =>
  ajax.post(DELETE_INTEREST, {
    draft_id: draftId,
    user_id: 'some-user',
    interest,
  });

export const GetDraft = (draftID) => ajax.get(`${GET_DRAFT}?draft=${draftID}`);

export const GetPreviewDraft = (draftId) => ajax.get(`${PREVIEW_DRAFT}/${draftId}`);
