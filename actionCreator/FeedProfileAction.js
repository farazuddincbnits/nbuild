// import { createAction } from 'redux-actions';
import { FEED_PROFILE_DETAILS } from "../constants/Action";
export const getFeedProfileDetails = (payload)=>{
    return{
        type:FEED_PROFILE_DETAILS,
        payload
    }
};