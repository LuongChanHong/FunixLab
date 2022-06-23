import React, { Component } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../database/staffs";
//RJS101x_asm2_honglcfx16049
import Departments from "./Departments";
import Salary from "./Salary";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  render() {
    const StaffDetailWithId = () => {
      let { id } = useParams();
      return (
        <StaffDetail
          selectedStaff={this.state.staffList.find((staff) => staff.id == id)}
        />
      );
    };

    return (
      <section className="container">
        <Routes>
          <Route
            exact
            path="/staff"
            element={<StaffList staffList={this.state.staffList} />}
          />
          <Route
            exact
            path="/salary"
            element={<Salary staffList={this.state.staffList} />}
          />
          <Route
            exact
            path="/department"
            element={<Departments departments={this.state.departments} />}
          />
          <Route path="/staff/:id" element={<StaffDetailWithId />} />
          <Route
            path="*"
            element={<StaffList staffList={this.state.staffList} />}
          />
        </Routes>
      </section>
    );
  }
}

export default Main;
