import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      let cmt = action.payload;
      cmt.id = state.length;
      cmt.date = new Date().toISOString();
      return state.concat(cmt);
    default:
      return state;
  }
};
