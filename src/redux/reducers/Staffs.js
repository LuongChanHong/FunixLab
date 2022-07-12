import { ACTION } from "../action";

const initialState = { staffList: [], errorMessage: null, isLoading: false };

export const StaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.GET_STAFF_LIST:
      // state.staffList = action.payload;
      console.log("payload trong staff reducer:", action.payload);
      state.staffList = action.payload;

      return { ...state };
    case ACTION.STAFF_LIST_LOADING:
      return { ...state };
    case ACTION.STAFF_LIST_FALED:
      return { ...state };
    default:
      return { ...state };
  }
};
