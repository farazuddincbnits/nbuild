// import { createAction } from 'redux-actions';
// import { CLIKSFEED } from "../constants/Action";
// export const listCliksfeed = createAction(CLIKSFEED);

import { CLIKSFEED } from "../constants/Action";
export const listCliksfeed = (payload) => {
    return {
        type: CLIKSFEED,
        payload
    }
}