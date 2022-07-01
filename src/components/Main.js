import React, { Component } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { STAFFS, DEPARTMENTS } from "../database/staffs";
import Departments from "./Departments";
import Salary from "./Salary";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";

const mapStateToProps = (state) => {
  return { staffList: state.staffList, departments: state.departments };
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const StaffDetailWithId = () => {
      let { id } = useParams();
      return (
        <StaffDetail
          selectedStaff={this.props.staffList.find((staff) => staff.id == id)}
        />
      );
    };

    return (
      <section className="container">
        <Routes>
          <Route
            exact
            path="/staff"
            element={<StaffList staffList={this.props.staffList} />}
          />
          <Route
            exact
            path="/salary"
            element={<Salary staffList={this.props.staffList} />}
          />
          <Route
            exact
            path="/department"
            element={<Departments departments={this.props.departments} />}
          />
          <Route path="/staff/:id" element={<StaffDetailWithId />} />
          <Route
            path="*"
            element={
              <StaffList
                staffModel={this.props.staffModel}
                staffList={this.props.staffList}
              />
            }
          />
        </Routes>
      </section>
    );
  }
}

// Kết nối comp dùng redux store với react router dom
export default connect(mapStateToProps)(Main);
