import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { DISHES } from "../shared/dishes.js";

export const addCommentAction = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const dishesLoadingAction = () => ({ type: ActionTypes.DISHES_LOADING });

export const dishesFailedAction = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishesAction = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// redux thunk
export const fetchDishesAction = () => (dispatch) => {
  dispatch(dishesLoadingAction(true));
  setTimeout(() => {
    dispatch(addDishesAction(DISHES));
  }, 2000);
};
