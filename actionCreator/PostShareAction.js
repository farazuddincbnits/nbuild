// import { createAction } from 'redux-actions';
// import { POSTSHAREACTION } from "../constants/Action";
// export const setsetPostShareAction = createAction(POSTSHAREACTION);

import { POSTSHAREACTION } from "../constants/Action";
export const setsetPostShareAction = (payload) => {
    return {
        type: POSTSHAREACTION,
        payload
    }
}