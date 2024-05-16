import { EDITFEED,EDITFEED_SUCCESS } from "../constants/Action";

export const editFeed = (payload) => {
    return {
        type: EDITFEED_SUCCESS,
        payload
    }
};
