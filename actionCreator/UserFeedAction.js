// import { createAction } from 'redux-actions';
// import { USERFEED } from "../constants/Action";
// export const getUserFeedList = createAction(USERFEED);

import { USERFEED } from "../constants/Action";
export const getUserFeedList = (payload) => {
    return {
        type: USERFEED,
        payload
    }
}