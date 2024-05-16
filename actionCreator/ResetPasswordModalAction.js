// import { createAction } from 'redux-actions';
import { RESETPASSWORDMODALACTION } from "../constants/Action";
export const setRESETPASSWORDMODALACTION = (payload)=>{
    return{
        type:RESETPASSWORDMODALACTION,
        payload
    }
};