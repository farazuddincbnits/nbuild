// import { createAction } from 'redux-actions';
// import { CREATEACCOUNTACTION } from "../constants/Action";
// export const setCreateAccount = createAction(CREATEACCOUNTACTION);

// import { createAction } from 'redux-actions';
import { CREATEACCOUNTACTION } from "../constants/Action";
export const setCreateAccount = (payload)=>{
    return{
        type:CREATEACCOUNTACTION,
        payload
    }
};