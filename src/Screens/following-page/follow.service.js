import ajax from 'helpers/ajaxHelper';
import { GET_CATEGORIES_AND_INTERESTS } from '../../Config/api.routes.config';

// eslint-disable-next-line import/prefer-default-export
export const GetCategoriesAndInterests = () => {
  return ajax.get(GET_CATEGORIES_AND_INTERESTS);
};
