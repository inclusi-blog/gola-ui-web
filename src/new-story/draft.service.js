import ajax from '../helpers/ajaxHelper';
import { GET_INTERESTS, SAVE_TAGLINE } from '../Config/api.routes.config';

export const GetInterests = (searchKeyWord) => ajax.post(GET_INTERESTS, { search_keyword: searchKeyWord });

export const SaveTagline = (postID, tagline, userID) =>
  ajax.post(SAVE_TAGLINE, { draft_id: postID, tagline, user_id: userID });
