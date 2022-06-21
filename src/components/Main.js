import React, { Component } from "react";
//RJS101x_asm2_honglcfx16049
import Departments from "./Departments";
import SalaryList from "./SalaryList";
import StaffList from "./StaffList";

import { Route, Routes } from "react-router-dom";
import { STAFFS } from "../database/staffs";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: STAFFS,
    };
  }

  render() {
    return (
      <section className="container">
        <Routes>
          <Route
            exact
            path="/staff"
            element={<StaffList staffList={this.state.staffList} />}
          />
          <Route exact path="/salary" element={<SalaryList />} />
          <Route exact path="/department" element={<Departments />} />
          <Route path="*" element={<StaffList />} />
        </Routes>
      </section>
    );
  }
}

export default Main;
