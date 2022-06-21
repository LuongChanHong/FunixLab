import React, { Component } from "react";

import Departments from "./Departments";
import SalaryList from "./SalaryList";
import StaffList from "./StaffList";

import { Route, Routes } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <section className="container">
        <Routes>
          <Route exact path="/staff" element={<StaffList />} />
          <Route exact path="/salary" element={<SalaryList />} />
          <Route exact path="/department" element={<Departments />} />
          <Route path="*" element={<StaffList />} />
        </Routes>
      </section>
    );
  }
}

export default Main;
