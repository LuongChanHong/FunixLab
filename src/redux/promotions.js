import * as ActionTypes from "./ActionTypes";

export const Promotions = (
  state = { isLoading: true, promos: [], errmess: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, promos: [], errmess: null };

    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        promos: action.payload,
        errmess: null,
      };

    case ActionTypes.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        promos: [],
        errmess: action.payload,
      };
    default:
      return state;
  }
};
