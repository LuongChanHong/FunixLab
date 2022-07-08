import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { DISHES } from "../shared/dishes.js";

// COMMENT ACTION

export const addCommentAction = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

// redux thunk
export const postCommentAction =
  (dishId, rating, author, comment) => (dispatch) => {
    const newCmt = {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment,
    };
    newCmt.date = new Date().toISOString();
    return fetch(baseUrl + "comments", {
      method: "POST",
      body: JSON.stringify(newCmt),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            let err = new Error(
              "ERROR::" + response.status + ":" + response.statusText
            );
            err.response = response;
            throw err;
          }
        },
        (error) => {
          let errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((cmt) => dispatch(addCommentAction(cmt)))
      .catch((error) => {
        console.log("Post cmt err:", error.message);
        alert("Comment cannot posted\nERROR::" + error.message);
      });
  };

export const commentListFailedAction = (errmess) => ({
  type: ActionTypes.COMMENT_LIST_FAILED,
  payload: errmess,
});

export const addCommentListAction = (cmtList) => ({
  type: ActionTypes.ADD_COMMENT_LIST,
  payload: cmtList,
});

// redux thunk
export const fetchCommentListAction = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "ERROR::" + response.status + ":" + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((cmtList) => dispatch(addCommentListAction(cmtList)))
    .catch((error) => {
      dispatch(commentListFailedAction(error.message));
    });
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "ERROR::" + response.status + ":" + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishesAction(dishes)))
    .catch((error) => {
      dispatch(dishesFailedAction(error.message));
    });
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "ERROR::" + response.status + ":" + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromosAction(promos)))
    .catch((error) => {
      dispatch(promosFailedAction(error.message));
    });
};
