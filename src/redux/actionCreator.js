import { ACTION } from "./action";
import { URL } from "../database/baseUrls";

// ====================================================
// STAFF ACTION =======================================
// ====================================================

// truyền object xác nhận staff list đang load vào staff reducer
export const handleStaffListFailed = (errorMessage) => ({
  type: ACTION.STAFF_LIST_FAILED,
  payload: errorMessage,
});

// truyền object xác nhận staff list đang load vào staff reducer
export const handleStaffListLoading = () => ({
  type: ACTION.STAFF_LIST_LOADING,
});

// truyền object chứa staff list vào staff reducer
export const getStaffList = (list) => ({
  type: ACTION.GET_STAFF_LIST,
  payload: list,
});

// fetch staff list từ server
export const fetchStaffList = () => (dispatch) => {
  dispatch(handleStaffListLoading());
  return fetch(URL.base + "staffs")
    .then((response) => response.json())
    .then((staffList) => {
      dispatch(getStaffList(staffList));
    });
};

// ====================================================
// COMMENT ACTION =====================================
// ====================================================
