import { ACTION } from "../action";

const initialState = { staffList: [], errorMessage: null, isLoading: false };

export const StaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_STAFF_LIST:
      state.staffList = action.payload;
      state.isLoading = false;
      state.errorMessage = null;
      return { ...state };
    case ACTION.STAFF_LIST_LOADING:
      state.isLoading = true;
      state.staffList = [];
      state.errorMessage = null;
      return { ...state };
    case ACTION.STAFF_LIST_FAILED:
      state.staffList = [];
      state.isLoading = false;
      state.errorMessage = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
