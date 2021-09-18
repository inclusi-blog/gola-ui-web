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

export const GetInterests = () =>
  ajax.get(GET_INTERESTS);

export const SaveTagline = (postID, tagline) =>
  ajax.put(`${SAVE_TAGLINE}?draft=${postID}`, {
    tagline
  });

export const UpdateInterests = (draftID, interests) => {
  const updatedInterests = interests.map((item) => item.name);
  return ajax.put(`${SAVE_INTERESTS}?draft=${draftID}`, {
    interests: updatedInterests,
  });
};

export const UpdatePreviewImage = (draftID, previewImage) =>
  ajax.put(`${SAVE_PREVIEW_IMAGE}?draft=${draftID}`, {
    preview_image: previewImage,
  });

export const PublishPost = (draftID) =>
  ajax.post(`${PUBLISH_DRAFT}?draft=${draftID}`);

export const DeleteInterest = (draftId, interest) =>
  ajax.post(DELETE_INTEREST, {
    draft_id: draftId,
    user_id: 'some-user',
    interest,
  });

export const GetDraft = (draftID) => ajax.get(`${GET_DRAFT}?draft=${draftID}`);

export const GetPreviewDraft = (draftId) => ajax.get(`${PREVIEW_DRAFT}/${draftId}`);
