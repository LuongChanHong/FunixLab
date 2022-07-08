import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { InitialFeedBack } from "./form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishList: Dishes,
      commentList: Comments,
      leaderList: Leaders,
      promotionList: Promotions,
      ...createForms({ feedback: InitialFeedBack }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
