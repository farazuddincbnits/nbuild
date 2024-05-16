// import { createAction } from 'redux-actions';
import { SIGNUPMODALACTION } from "../constants/Action";
export const setSIGNUPMODALACTION = (payload)=>{
    return{
        type:SIGNUPMODALACTION,
        payload
    }
};