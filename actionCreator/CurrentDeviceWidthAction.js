// import { createAction } from 'redux-actions';
// import { CURRENTDEVICEWIDTHACTION } from "../constants/Action";
// export const setCURRENTDEVICEWIDTHACTION = createAction(CURRENTDEVICEWIDTHACTION);
import { CURRENTDEVICEWIDTHACTION } from "../constants/Action";
export const setCURRENTDEVICEWIDTHACTION = (payload) => {
    return {
        type: CURRENTDEVICEWIDTHACTION,
        payload
    }
}