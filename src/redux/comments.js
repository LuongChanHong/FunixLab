import * as ActionTypes from "./ActionTypes";

export const Comments = (state = { cmts: [], errmess: null }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT_LIST:
      return {
        ...state,
        cmts: action.payload,
        errmess: null,
      };
    case ActionTypes.COMMENT_LIST_FAILED:
      return {
        ...state,
        cmts: [],
        errmess: action.payload,
      };
    case ActionTypes.ADD_COMMENT:
      let cmt = action.payload;
      return { ...state, cmts: state.cmts.concat(cmt) };
    default:
      return state;
  }
};
