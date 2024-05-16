// import { createAction } from "redux-actions";
import { TRENDINGEXTERNALFEEDS } from "../constants/Action";
export const getTrendingExternalFeeds = (payload)=>{
    return{
        type:TRENDINGEXTERNALFEEDS,
        payload
    }
};
