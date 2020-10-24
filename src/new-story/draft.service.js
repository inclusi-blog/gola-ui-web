import ajax from '../helpers/ajaxHelper';
import { GET_INTERESTS, SAVE_TAGLINE } from '../Config/api.routes.config';

export const GetInterests = (searchKeyWord, selectedTags) =>
  ajax.post(GET_INTERESTS, { searchKeyword: searchKeyWord, selectedTags });

export const SaveTagline = (postID, tagline, userID) =>
  ajax.post(SAVE_TAGLINE, { draft_id: postID, tagline, user_id: userID });
