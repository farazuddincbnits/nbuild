// import { createAction } from 'redux-actions';
// import { FEEDREPORTMODALACTION } from "../constants/Action";
// export const setFEEDREPORTMODALACTION = createAction(FEEDREPORTMODALACTION);

import { FEEDREPORTMODALACTION } from "../constants/Action";
export const setFEEDREPORTMODALACTION = (payload)=>{
    return{
        type:FEEDREPORTMODALACTION,
        payload
    }
};