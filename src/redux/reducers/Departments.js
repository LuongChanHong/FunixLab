import { ACTION } from "../action";

const initialState = { depmList: [], errorMessage: null, isLoading: false };

export const DepartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DEPM_LIST:
      state.depmList = action.payload;
      state.isLoading = false;
      state.errorMessage = null;
      return { ...state };
    case ACTION.DEPM_LIST_LOADING:
      state.isLoading = true;
      state.depmList = [];
      state.errorMessage = null;
      return { ...state };
    case ACTION.DEPM_LIST_FAILED:
      state.depmList = [];
      state.isLoading = false;
      state.errorMessage = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
/*  */
