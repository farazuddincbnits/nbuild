// import { createAction } from 'redux-actions';
import { TRENDINGCLICKS } from "../constants/Action";
export const getTrendingClicks = (payload)=>{
    return{
        type:TRENDINGCLICKS,
        payload
    }
};