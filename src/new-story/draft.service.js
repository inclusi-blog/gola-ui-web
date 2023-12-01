import axios from 'axios';
import ajax from '../helpers/ajaxHelper';
import {
  DELETE_DRAFT,
  DELETE_INTEREST,
  GET_DRAFT,
  GET_DRAFTS,
  GET_INTERESTS,
  GET_PRESIGN_DRAFT_IMAGE_URL,
  GET_PRESIGN_PREVIEW_IMAGE_URL,
  PREVIEW_DRAFT,
  PUBLISH_DRAFT,
  SAVE_INTERESTS,
  SAVE_TAGLINE,
  SYNC_DRAFT_IMAGE,
  SYNC_PREVIEW_IMAGE,
} from '../Config/api.routes.config';

export const GetInterests = () => ajax.get(GET_INTERESTS);

export const SaveTagline = (postID, tagline) =>
  ajax.put(`${SAVE_TAGLINE}?draft=${postID}`, {
    tagline,
  });

export const UpdateInterests = (draftID, interests) => {
  const updatedInterests = interests.map((item) => item.name);
  return ajax.put(`${SAVE_INTERESTS}?draft=${draftID}`, {
    interests: updatedInterests,
  });
};

export const PublishPost = (draftID) => ajax.post(`${PUBLISH_DRAFT}?draft=${draftID}`);

export const DeleteInterest = (draftId, interest) =>
  ajax.post(DELETE_INTEREST, {
    draft_id: draftId,
    user_id: 'some-user',
    interest,
  });

export const GetDraft = (draftID) => ajax.get(`${GET_DRAFT}?draft=${draftID}`);

export const GetPreviewDraft = (draftId) => ajax.get(`${PREVIEW_DRAFT}/${draftId}`);

export const GetDrafts = (cancelToken, start, limit) =>
  ajax.post(
    GET_DRAFTS,
    {
      start_value: start,
      limit,
    },
    { cancelToken: cancelToken.token }
  );

export const GetPreSignPreviewImageURL = (fileExtension, draftID) => {
  return ajax.get(`${GET_PRESIGN_PREVIEW_IMAGE_URL.replace('{draftID}', draftID)}?extension=${fileExtension}`);
};

export const UploadPreviewImage = (uploadURL, file) => {
  return axios.put(uploadURL, file);
};

export const SyncPreviewImage = (uploadID, draftID) => {
  return ajax.post(SYNC_PREVIEW_IMAGE.replace('{draftID}', draftID), { upload_id: uploadID });
};

export const GetPreSignDraftImageURL = (fileExtension, draftID) => {
  return ajax.get(`${GET_PRESIGN_DRAFT_IMAGE_URL.replace('{draftID}', draftID)}?extension=${fileExtension}`);
};

export const UploadDraftImage = (uploadURL, file) => {
  return axios.put(uploadURL, file);
};

export const SyncDraftImage = (uploadID, draftID) => {
  return ajax.post(SYNC_DRAFT_IMAGE.replace('{draftID}', draftID), { upload_id: uploadID });
};

export const DeleteDraft = (draftID) => {
  return ajax.delete(`${DELETE_DRAFT}?draft=${draftID}`);
};
