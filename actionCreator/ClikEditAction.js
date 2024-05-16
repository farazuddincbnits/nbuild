import { EDITCLIK,EDITCLIK_SUCCESS } from "../constants/Action";
// export const editClik = createAction(EDITCLIK);

export const editClik = (payload) => {
    return {
        type: EDITCLIK_SUCCESS,
        payload
    }
};
