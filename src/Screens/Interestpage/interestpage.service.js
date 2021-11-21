import ajax from 'helpers/ajaxHelper';
import {BOOKMARK_POST, GET_INTEREST_DETAILS, GET_POSTS_BY_INTERESTS} from "../../Config/api.routes.config";

export const GetPostsByInterest = (interestID) => {
    return ajax.get(`${GET_POSTS_BY_INTERESTS.replace(":interest_id",interestID)}?start=0&limit=3`);
};

export const GetInterestDetails = (interestName) => {
    return ajax.post(GET_INTEREST_DETAILS,{
        name: interestName
    });
};

export const BookmarkPost = (postID) => {
    return ajax.get(BOOKMARK_POST.replace('{postID}',postID));
};