// import { createAction } from 'redux-actions';
import { CLIKS_PROFILE_DETAILS } from "../constants/Action";
// export const getTrendingCliksProfileDetails = createAction(CLIKS_PROFILE_DETAILS);

export const getTrendingCliksProfileDetails = (payload) => {
    return {
        type: CLIKS_PROFILE_DETAILS,
        payload
    }
};
