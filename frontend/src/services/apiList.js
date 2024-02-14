const BASE_URL = process.env.REACT_APP_BASE_URL;

export const catagories = BASE_URL + '/course/showAllCategories';
export const sendotpAPI = BASE_URL + '/auth/sendOtp';
export const SIGNUP_API = BASE_URL + '/auth/signup';
export const LOGIN_API = BASE_URL + '/auth/login';
export const UPDATE_PROFILE_PICTURE = BASE_URL + '/profile/updateProfilePicture';
export const UPDATE_PROFILE = BASE_URL + '/profile/updateProfile';
export const CREATE_COURSE = BASE_URL + '/course/createCourse';
