// Set up tổng state toàn ứng dụng
import { DISHES } from "../shared/dishes.js";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
  dishList: DISHES,
  commentList: COMMENTS,
  leaderList: LEADERS,
  promotionList: PROMOTIONS,
};

// Nhận state cũ để tạo state mới
export const Reducer = (state = initialState, action) => {
  return state;
};
