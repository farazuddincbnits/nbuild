// import { createAction } from "redux-actions";
import { POSTCOMMENTDETAILS } from "../constants/Action";
export const setPostCommentDetails = (payload)=>{
    return{
        type:POSTCOMMENTDETAILS,
        payload
    }
}