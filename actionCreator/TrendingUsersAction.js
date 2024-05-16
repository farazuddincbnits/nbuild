// import { createAction } from 'redux-actions';
import { TRENDINGUSERS } from "../constants/Action";
export const getTrendingUsers = (payload)=>{
    return{
        type:TRENDINGUSERS,
        payload
    }
};