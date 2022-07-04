import { createStore, combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishList: Dishes,
      commentList: Comments,
      leaderList: Leaders,
      promotionList: Promotions,
    })
  );
  return store;
};
