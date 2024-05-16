// import { createAction } from 'redux-actions';
// import { VERIFYEMAILMODALACTION } from "../constants/Action";
// export const setVERIFYEMAILMODALACTION = createAction(VERIFYEMAILMODALACTION);

import { VERIFYEMAILMODALACTION } from "../constants/Action";
export const setVERIFYEMAILMODALACTION = (payload) => {
    return {
        type: VERIFYEMAILMODALACTION,
        payload
    }
}