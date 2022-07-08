import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { DISHES } from "../shared/dishes.js";

// COMMENT ACTION

export const addCommentAction = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const commentListFailedAction = (errmess) => ({
  type: ActionTypes.COMMENT_LIST_FAILED,
  payload: errmess,
});

export const addCommentListAction = (cmtList) => ({
  type: ActionTypes.ADD_COMMENT_LIST,
  payload: cmtList,
});

export const fetchCommentListAction = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((cmtList) => dispatch(addCommentListAction(cmtList)));
};

// DISHES ACTION

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

  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishesAction(dishes)));
};

// PROMO ACTION

export const promosLoadingAction = () => ({ type: ActionTypes.PROMOS_LOADING });

export const promosFailedAction = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromosAction = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

// redux thunk
export const fetchPromosAction = () => (dispatch) => {
  dispatch(promosLoadingAction(true));

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromosAction(promos)));
};
