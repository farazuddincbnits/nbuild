// import { createAction } from 'redux-actions';
import { LIKECONTENT } from "../constants/Action";
export const setLikeContent= (payload)=>{
    return{
        type:LIKECONTENT,
        payload
    }
};