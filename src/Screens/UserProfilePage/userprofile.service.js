import ajax from 'helpers/ajaxHelper';
import {
  EDIT_USER_PROFILE_DETAILS,
  GET_PRESIGN_PROFILE_PICTURE_URL,
  GET_PROFILE_PICTURE,
  GET_USER_PROFILE_DETAILS,
  SYNC_PROFILE_PICTURE,
} from '../../Config/api.routes.config';
import axios from 'axios';

export const getUserProfileDetails = () => {
  return ajax.get(GET_USER_PROFILE_DETAILS);
};

export const editUserProfileDetails = (requestBody) => {
  return ajax.put(EDIT_USER_PROFILE_DETAILS, requestBody);
};

export const GetPreSignProfilePictureURL = (fileExtension) => {
  return ajax.get(`${GET_PRESIGN_PROFILE_PICTURE_URL}?extension=${fileExtension}`);
};

export const UploadProfilePicture = (uploadURL, file) => {
  return axios.put(uploadURL, file);
};

export const SyncProfilePicture = (uploadID) => {
  return ajax.post(SYNC_PROFILE_PICTURE, { upload_id: uploadID });
};

export const GetProfilePicture = (userID) => {
  const getProfilePictureURL = GET_PROFILE_PICTURE.replace(':user_id', userID);
  return axios.get(getProfilePictureURL);
};
