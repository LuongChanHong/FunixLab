import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { StaffReducer } from "./reducers/Staffs";
import { DepartmentReducer } from "./reducers/Departments";
import { SalaryReducer } from "./reducers/Salary";

const reducer = combineReducers({
  staffList: StaffReducer,
  depmList: DepartmentReducer,
  salaryList: SalaryReducer,
});

export const ConfigureStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
};
