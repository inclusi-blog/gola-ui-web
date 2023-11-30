import ajax from 'helpers/ajaxHelper';
import {
  ADD_COMMENT,
  GET_POST,
  GET_PUBLISHED_POST, HOME_FEED,
  LIKE_POST,
  LIST_COMMENTS,
  UNLIKE_POST
} from '../../Config/api.routes.config';

// eslint-disable-next-line import/prefer-default-export
export const GetPost = (postId) => {
  return ajax.get(`${GET_POST}/${postId}`);
};

export const GetPublishedPosts = (cancelToken, start, limit) => ajax.post(GET_PUBLISHED_POST,{
  start_value: start,
  limit
}, { cancelToken: cancelToken.token });

export const LikePost = (cancelToken, postID) => {
  return ajax.get(`${LIKE_POST}?post=${postID}`, {}, {cancelToken: cancelToken.token});
};

export const UnlikePost = (cancelToken, postID) => {
  return ajax.get(`${UNLIKE_POST}?post=${postID}`, {}, {cancelToken: cancelToken.token});
};

export const AddComment = (postID, comment) => {
  const addCommentURL = ADD_COMMENT.replace('{postID}', postID);
  return ajax.post(addCommentURL, {data: comment});
};

export const ListComments = (postID,start,limit) => {
  const listCommentURL = LIST_COMMENTS.replace('{postID}', postID);
  return ajax.get(`${listCommentURL}?start=${start}&limit=${limit}`);
};

export const GetHomeFeed = (start, limit) => {
  return ajax.get(`${HOME_FEED}?start=${start}&limit=${limit}`);
};
