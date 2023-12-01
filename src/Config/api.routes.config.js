import CONFIGS from 'appConfig';
export const GET_INTERESTS = 'post/v1/interests';
export const SAVE_TAGLINE = 'post/v1/draft/tagline';
export const SAVE_INTERESTS = 'post/v1/draft/interests';
export const GET_PRESIGN_PREVIEW_IMAGE_URL = 'post/v1/draft/pre-sign/{draftID}';
export const GET_PRESIGN_DRAFT_IMAGE_URL = 'post/v1/draft/image/{draftID}';
export const SYNC_PREVIEW_IMAGE = 'post/v1/draft/preview/{draftID}/upload';
export const SYNC_DRAFT_IMAGE = 'post/v1/draft/image/{draftID}/upload';
export const DELETE_INTEREST = 'post/v1/draft/delete-interest';
export const PUBLISH_DRAFT = 'post/v1/post/publish';
export const GET_DRAFT = 'post/v1/draft';
export const GET_DRAFTS = 'post/v1/draft/get-all-draft';
export const PREVIEW_DRAFT = 'post/v1/draft/preview-draft';
export const GET_POST = 'post/v1/post';
export const GET_CATEGORIES_AND_INTERESTS = 'user-profile/v1/interests/explore';
export const FOLLOW_INTEREST = 'user-profile/v1/interests';
export const GET_USER_FOLLOWING_INTERESTS = 'user-profile/v1/interests/followed';
export const GET_PUBLISHED_POST = 'user-profile/v1/posts';
export const LIKE_POST = 'post/v1/post/like';
export const UNLIKE_POST = 'post/v1/post/unlike';
export const ADD_COMMENT = 'post/v1/post/{postID}/comment';
export const LIST_COMMENTS = 'post/v1/post/{postID}/comments';
export const GET_USER_PROFILE_DETAILS = 'user-profile/v1/profile';
export const EDIT_USER_PROFILE_DETAILS = 'idp/v1/user-details';
export const GET_PRESIGN_PROFILE_PICTURE_URL = 'user-profile/v1/profile/presign';
export const SYNC_PROFILE_PICTURE = 'user-profile/v1/profile/avatar/upload';
export const GET_PROFILE_PICTURE = `${CONFIGS.API_BASE_URL}/api/user-profile/v1/user/:user_id/avatar`;
export const GET_POSTS_BY_INTERESTS = 'post/v1/interests/posts/:interest_id';
export const GET_INTEREST_DETAILS = 'post/v1/interests/details';
export const BOOKMARK_POST = 'post/v1/post/{postID}/save';
export const DELETE_DRAFT = 'post/v1/draft';
export const HOME_FEED = 'post/v1/posts';
