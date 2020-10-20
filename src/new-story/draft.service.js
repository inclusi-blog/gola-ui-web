import ajax from '../helpers/ajaxHelper';
import { GET_INTERESTS, SAVE_TAGLINE } from '../Config/api.routes.config';

export const GetInterests = () => ajax.get(GET_INTERESTS);

export const SaveTagline = (postID, tagline, userID) =>
  ajax.post(SAVE_TAGLINE, { draft_id: postID, tagline, user_id: userID });
