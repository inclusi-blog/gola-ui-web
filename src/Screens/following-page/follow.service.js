import ajax from 'helpers/ajaxHelper';
import {
  FOLLOW_INTEREST,
  GET_CATEGORIES_AND_INTERESTS,
  GET_USER_FOLLOWING_INTERESTS,
} from '../../Config/api.routes.config';

export const GetCategoriesAndInterests = () => {
  return ajax.get(GET_CATEGORIES_AND_INTERESTS);
};

export const FollowInterest = (interestName) => {
  return ajax.post(FOLLOW_INTEREST, {
    name: interestName,
  });
};

export const GetUserFollowingInterest = () => {
  return ajax.get(GET_USER_FOLLOWING_INTERESTS);
};
