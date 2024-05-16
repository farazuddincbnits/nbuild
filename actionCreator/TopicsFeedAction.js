// import { createAction } from 'redux-actions';
import { TOPICSFEED } from "../constants/Action";
export const listTopicFeed = (payload)=>{
    return{
        type:TOPICSFEED,
        payload
    }
};