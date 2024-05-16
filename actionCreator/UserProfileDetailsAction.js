// import { createAction } from 'redux-actions';
import { USER_PROFILE_DETAILS } from "../constants/Action";
export const getCurrentUserProfileDetails = (payload) => {
    return {
        type: USER_PROFILE_DETAILS,
        payload
    }
}