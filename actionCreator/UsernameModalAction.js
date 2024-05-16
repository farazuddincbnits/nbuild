// import { createAction } from 'redux-actions';
import { USERNAMEMODALACTION } from "../constants/Action";
export const setUSERNAMEMODALACTION = (payload)=>{
    return{
        type:USERNAMEMODALACTION,
        payload
    }
};