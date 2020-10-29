import ajax from '../helpers/ajaxHelper';
import { GET_INTERESTS, SAVE_INTERESTS, SAVE_PREVIEW_IMAGE, SAVE_TAGLINE } from '../Config/api.routes.config';

export const GetInterests = (searchKeyWord, selectedTags) =>
  ajax.post(GET_INTERESTS, { searchKeyword: searchKeyWord, selectedTags });

export const SaveTagline = (postID, tagline, userID) =>
  ajax.post(SAVE_TAGLINE, { draft_id: postID, tagline, user_id: userID });

export const UpdateInterests = (postID, interests, userID) =>
  ajax.post(SAVE_INTERESTS, {
    user_id: userID,
    draft_id: postID,
    interests,
  });

export const UpdatePreviewImage = (draftID, previewImage, userID) =>
  ajax.post(SAVE_PREVIEW_IMAGE, {
    draft_id: draftID,
    user_id: userID,
    preview_image: previewImage,
  });
