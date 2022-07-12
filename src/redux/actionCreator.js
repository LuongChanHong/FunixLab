import { ACTION } from "./action";
import { URL } from "../database/baseUrls";

export const getStaffList = (list) => ({
  type: ACTION.GET_STAFF_LIST,
  payload: list,
});

export const fetchStaffList = () => (dispatch) => {
  return fetch(URL.base + "staffs")
    .then((response) => response.json())
    .then((staffList) => {
      console.log("list fetch từ BE:", staffList);
      dispatch(getStaffList(staffList));
    });
};
