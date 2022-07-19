//RJS101x_asm4_honglcfx16049

import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";

import Departments from "./Departments";
import Salary from "./Salary";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";

import { fetchData, postData, deleteData } from "../redux/actionCreator";

const mapDispatchToProps = (dispatch) => ({
  getStaffListMethod: () => {
    dispatch(fetchData("staffs"));
  },
  getDepartmentListMethod: () => {
    dispatch(fetchData("departments"));
  },
  getSalaryListMethod: () => {
    dispatch(fetchData("staffsSalary"));
  },
  postDataMethod: (param, data) => {
    dispatch(postData(param, data));
  },
  deleteDataMethod: (param, deleteId) => {
    dispatch(deleteData(param, deleteId));
  },
});

const mapStateToProps = (state) => {
  return {
    staffsObject: state.staffList,
    departmentsObject: state.depmList,
    salarysObject: state.salaryList,
  };
};

// ======================================================================================
// MAIN FUNCTION
// ======================================================================================

const Main = (props) => {
  useEffect(() => {
    props.getStaffListMethod();
    props.getDepartmentListMethod();
    props.getSalaryListMethod();
  }, []);

  // ================================
  // RETURN
  // ================================
  return (
    <section className="container">
      <Routes>
        {/* StaffList route*/}
        <Route
          exact
          path="/staff"
          element={
            <StaffList
              staffsObject={props.staffsObject}
              depmList={props.departmentsObject.depmList}
              postStaffMethod={props.postDataMethod}
            />
          }
        />
        {/* Salary route*/}
        <Route
          exact
          path="/salary"
          element={<Salary salarysObject={props.salarysObject} />}
        />
        {/* Departments route*/}
        <Route
          exact
          path="/department"
          element={<Departments departmentsObject={props.departmentsObject} />}
        />
        {/* StaffDetail route*/}
        <Route
          path="/staff/:id"
          element={
            <StaffDetail
              staffList={props.staffsObject.staffList}
              depmList={props.departmentsObject.depmList}
              deleteDataMethod={props.deleteDataMethod}
            />
          }
        />
        {/* Các URL còn lại/ không hợp lệ */}
        <Route
          path="*"
          element={
            <StaffList
              staffsObject={props.staffsObject}
              depmList={props.departmentsObject.depmList}
              postStaffMethod={props.postDataMethod}
            />
          }
        />
      </Routes>
    </section>
  );
};

// Kết nối comp dùng redux store với react router dom
export default connect(mapStateToProps, mapDispatchToProps)(Main);
/*  */
