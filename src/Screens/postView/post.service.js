import ajax from 'helpers/ajaxHelper';
import {GET_POST, GET_PUBLISHED_POST, LIKE_POST, UNLIKE_POST} from '../../Config/api.routes.config';

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
}

export const UnlikePost = (cancelToken, postID) => {
  return ajax.get(`${UNLIKE_POST}?post=${postID}`, {}, {cancelToken: cancelToken.token});
}
