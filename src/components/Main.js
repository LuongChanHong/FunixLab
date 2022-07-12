import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";

import Departments from "./Departments";
import Salary from "./Salary";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";

import { fetchStaffList } from "../redux/actionCreator";

const mapDispatchToProps = (dispatch) => ({
  getStaffListMethod: () => {
    dispatch(fetchStaffList());
  },
});

const mapStateToProps = (state) => {
  console.log("list trong mapStateToProps:", state.staffList.staffList);
  return { staffList: state.staffList, departments: state.departments };
};

// ======================================================================================
// MAIN FUNCTION
// ======================================================================================

const Main = (props) => {
  useEffect(() => {
    props.getStaffListMethod();
  }, []);
  return (
    <section className="container">
      <Routes>
        {/* StaffList route*/}
        <Route
          exact
          path="/staff"
          element={
            <StaffList
              staffList={props.staffList.staffList}
              staffModel={props.staffModel}
            />
          }
        />
        {/* Salary route*/}
        <Route
          exact
          path="/salary"
          element={<Salary staffList={props.staffList} />}
        />
        {/* Departments route*/}
        <Route
          exact
          path="/department"
          element={<Departments departments={props.departments} />}
        />
        {/* StaffDetail route*/}
        {/* {`/staff/:${id}`} */}
        <Route
          path="/staff/:id"
          element={<StaffDetail staffList={props.staffList} />}
        />
        {/* Các URL còn lại/ không hợp lệ */}
        {/* ====================================================================== */}
        {/* ====================================================================== */}
        {/* ====================================================================== */}

        <Route
          path="*"
          element={
            <StaffList
              staffModel={props.staffModel}
              staffList={props.staffList.staffList}
            />
          }
        />
      </Routes>
    </section>
  );
};

// Kết nối comp dùng redux store với react router dom
export default connect(mapStateToProps, mapDispatchToProps)(Main);
