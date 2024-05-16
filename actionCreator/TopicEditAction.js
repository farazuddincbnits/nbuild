// import { createAction } from 'redux-actions';
import { EDITTOPIC,EDITTOPIC_SUCCESS } from "../constants/Action";
// export const editTopic = createAction(EDITTOPIC);

export const editTopic = (payload) => {
    return {
        type: EDITTOPIC_SUCCESS,
        payload
    }
};
