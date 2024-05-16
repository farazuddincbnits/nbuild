// import { createAction } from 'redux-actions';
import { TRENDINGTOPICS } from "../constants/Action";
export const getTrendingTopics = (payload)=>{
    return{
        type:TRENDINGTOPICS,
        payload
    }
};