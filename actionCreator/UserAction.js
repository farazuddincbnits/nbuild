// import { createAction } from 'redux-actions';
import { LOGIN_STATUS, LOGIN_USER_DETAILS} from "../constants/Action";

export const setLoginStatus = (payload)=>{
    return{
        type:LOGIN_STATUS,
        payload
    }
};

export const saveUserLoginDaitails = (payload)=>{
    return{
        type:LOGIN_USER_DETAILS,
        payload
    }
};
