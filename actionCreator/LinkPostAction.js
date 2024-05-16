// import { createAction } from 'redux-actions';
import { POSTLINK, POST_EDIT_DETAILS } from "../constants/Action";
export const postLink = (payload) => {
    return {
        type: POSTLINK,
        payload
    }
}

export const postEditDetails = (payload) => {
    return {
        type: POST_EDIT_DETAILS,
        payload
    }
}
// export const postEditDetails = createAction(POST_EDIT_DETAILS);