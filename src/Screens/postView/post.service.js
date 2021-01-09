import ajax from 'helpers/ajaxHelper';
import { GET_POST } from '../../Config/api.routes.config';

// eslint-disable-next-line import/prefer-default-export
export const GetPost = (postId) => {
  return ajax.get(`${GET_POST}/${postId}`);
};
