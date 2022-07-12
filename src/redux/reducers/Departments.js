import { ACTION } from "../action";

const initialState = { depmList: [], errorMessage: null, isLoading: false };

export const DepartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_DEPM_LIST:
      return { ...state };
    case ACTION.DEPM_LIST_LOADING:
      return { ...state };
    case ACTION.DEPM_LIST_FALED:
      return { ...state };
    default:
      return { ...state };
  }
};
