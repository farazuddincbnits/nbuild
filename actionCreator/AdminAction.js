// import { createAction } from 'redux-actions';
import { ADMIN_STATUS,ADMIN_VIEW} from "../constants/Action";

export const setAdminStatus = (payload)=>{
    return{
        type:ADMIN_STATUS,
        payload
    }
};
export const setAdminView = (payload)=>{
    return{
        type:ADMIN_VIEW,
        payload
    }
};