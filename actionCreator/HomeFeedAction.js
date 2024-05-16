// import { createAction } from 'redux-actions';
import { HOMEFEED, HOMEFEED_FAILURE } from "../constants/Action";
export const getHomefeedList = (payload) => {
    return {
        type: HOMEFEED,
        payload
    }
};
export const resetHomefeedList = (payload) => {
    return {
        type: HOMEFEED_FAILURE,
        payload
    }
};
