// import { createAction } from 'redux-actions';
import { TOPICS_PROFILE_DETAILS } from "../constants/Action";
export const getTrendingTopicsProfileDetails = (payload)=>{
    return{
        type:TOPICS_PROFILE_DETAILS,
        payload
    }
};