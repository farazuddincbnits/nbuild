// import { createAction } from 'redux-actions';
import { USERAPPROACHACTION } from "../constants/Action";
export const setUserApproachAction = (payload)=>{
    return{
        type:USERAPPROACHACTION,
        payload
    }
};