import {SCREENLOADINGMODALACTION_SUCCESS } from "../constants/Action";

export const setScreenLoadingModalAction = (payload) => {
    return {
        type: SCREENLOADINGMODALACTION_SUCCESS,
        payload
    }
};
