// import { createAction } from 'redux-actions';
// import { CLIKUSERREQUEST } from "../constants/Action";
// export const listClikUserRequest = createAction(CLIKUSERREQUEST);
import { CLIKUSERREQUEST,CLIKMEMBERS } from "../constants/Action";
export const listClikUserRequest = (payload)=>{
    return{
        type:CLIKUSERREQUEST,
        payload
    }
};

export const getClikMember = (payload)=>{
    return{
        type:CLIKMEMBERS,
        payload
    }
};