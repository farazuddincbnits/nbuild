// import { createAction } from 'redux-actions';
import { LOGINMODALACTION } from "../constants/Action";
export const setLOGINMODALACTION = (payload) => {
    return {
        type: LOGINMODALACTION,
        payload
    }
};