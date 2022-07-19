import { ACTION } from "./action";
import { URL } from "../database/baseUrls";
import { fetchAPI, apiOtherElement } from "./fetchMethod";

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

// post staff list mới từ api vào redux state
export const postStaff = (list) => ({
  type: ACTION.ADD_NEW_STAFF,
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
  return fetchAPI(param)
    .then((staffList) => {
      dispatch(getDataFunction(staffList));
    })
    .catch((error) => {
      dispatch(failedFunction(error.message));
    });
};

// post data lên server theo string param
export const postData = (param, postData) => (dispatch) => {
  const postElement = apiOtherElement("POST", postData);
  let failedFunction;
  let postDataFunction;

  switch (param) {
    case "staffs":
      failedFunction = (data) => handleStaffListFailed(data);
      postDataFunction = (data) => postStaff(data);
      break;
  }
  return fetchAPI(param, postElement)
    .then((staffList) => {
      dispatch(postDataFunction(staffList));
    })
    .catch((error) => {
      dispatch(failedFunction(error.message));
    });
};
