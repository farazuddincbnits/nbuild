// import { createAction } from 'redux-actions';
import { INVITESIGNUPMODALACTION } from "../constants/Action";
export const setInviteSIGNUPMODALACTION = (payload)=>{
    return{
        type:INVITESIGNUPMODALACTION,
        payload
    }
}