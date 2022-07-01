// Set up tổng state toàn ứng dụng
import { STAFFS, DEPARTMENTS } from "../database/staffs";

export const initialState = { staffList: STAFFS, departments: DEPARTMENTS };

// Nhận state cũ để tạo state mới
export const Reducer = (state = initialState, actione) => {
  return state;
};
