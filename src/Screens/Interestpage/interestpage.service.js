import ajax from 'helpers/ajaxHelper';
import {BOOKMARK_POST, GET_INTEREST_DETAILS, GET_POSTS_BY_INTERESTS} from "../../Config/api.routes.config";

export const GetPostsByInterest = () => {
    return ajax.get(`${GET_POSTS_BY_INTERESTS}?start=0&limit=3`);
};

export const GetInterestDetails = () => {
    return ajax.get(GET_INTEREST_DETAILS);
};

export const BookmarkPost = (postID) => {
    return ajax.get(BOOKMARK_POST.replace('{postID}',postID));
};