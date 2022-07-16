import { ACTION } from "../action";

const initialState = { salaryList: [], errorMessage: null, isLoading: false };

export const SalaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_SALARY_LIST:
      state.salaryList = action.payload;
      state.isLoading = false;
      state.errorMessage = null;
      return { ...state };
    case ACTION.SALARY_LIST_LOADING:
      state.isLoading = true;
      state.salaryList = [];
      state.errorMessage = null;
      return { ...state };
    case ACTION.SALARY_LIST_FAILED:
      state.salaryList = [];
      state.isLoading = false;
      state.errorMessage = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
