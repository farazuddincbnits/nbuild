import { HASSCROLLEDACTION } from "../constants/Action";

export const setHASSCROLLEDACTION = (payload) => {
    return {
        type: HASSCROLLEDACTION,
        payload
    }
};
