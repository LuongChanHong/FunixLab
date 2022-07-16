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

// ====================================================
// DEPARTMENT ACTION ==================================
// ====================================================

// truyền object xác nhận department list đang load vào department reducer
export const handleDepartmentsFailed = (errorMessage) => ({
  type: ACTION.DEPM_LIST_FAILED,
  payload: errorMessage,
});

// truyền object xác nhận department list đang load vào department reducer
export const handleDepartmentsLoading = () => ({
  type: ACTION.DEPM_LIST_LOADING,
});

// truyền object chứa department list vào department reducer
export const getDepartments = (list) => ({
  type: ACTION.GET_DEPM_LIST,
  payload: list,
});

// ====================================================
// SALATY ACTION ======================================
// ====================================================

// truyền object xác nhận department list đang load vào department reducer
export const handleSalaryListFailed = (errorMessage) => ({
  type: ACTION.SALARY_LIST_FAILED,
  payload: errorMessage,
});

// truyền object xác nhận department list đang load vào department reducer
export const handleSalaryListLoading = () => ({
  type: ACTION.SALARY_LIST_LOADING,
});

// truyền object chứa department list vào department reducer
export const getSalaryList = (list) => ({
  type: ACTION.GET_SALARY_LIST,
  payload: list,
});

// Fetch data từ server theo string param truyền vào
export const fetchData = (param) => (dispatch) => {
  let isLoadingFunction;
  let failedFunction;
  let getDataFunction;

  switch (param) {
    case "staffs":
      isLoadingFunction = () => handleStaffListLoading();
      failedFunction = (data) => handleStaffListFailed(data);
      getDataFunction = (data) => getStaffList(data);
      break;
    case "departments":
      isLoadingFunction = () => handleDepartmentsLoading();
      failedFunction = (data) => handleDepartmentsFailed(data);
      getDataFunction = (data) => getDepartments(data);
      break;
    case "staffsSalary":
      isLoadingFunction = () => handleSalaryListLoading();
      failedFunction = (data) => handleSalaryListFailed(data);
      getDataFunction = (data) => getSalaryList(data);
      break;
  }

  // console.log(URL.base + "staffs");
  // console.log(URL.base + param);

  dispatch(isLoadingFunction());
  return fetch(URL.base + param)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let err = new Error(
            "ERROR::" + response.status + ":" + response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (error) => {
        let errMes = new Error(error.message);
        // console.log("Error message:", errMes);
        throw errMes;
      }
    )
    .then((response) => response.json())
    .then((staffList) => {
      dispatch(getDataFunction(staffList));
    })
    .catch((error) => {
      dispatch(failedFunction(error.message));
    });
};
