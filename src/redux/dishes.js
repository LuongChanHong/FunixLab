import * as ActionTypes from "./ActionTypes";

export const Dishes = (
  state = { isLoading: true, dishes: [], errmess: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, dishes: [], errmess: null };

    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        dishes: action.payload,
        errmess: null,
      };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        dishes: [],
        errmess: action.payload,
      };

    default:
      return state;
  }
};
