// import logo from "./logo.svg";

// RJS101x_Assignment1_honglcfx16049@funix.edu.vn

import "./style/style.css";
import React, { Component } from "react";

import { STAFFS, ROLE, DEPARTMENTS } from "./shared/staffs";
import Menu from "./components/Menu.js";
import StaffList from "./components/StaffList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: STAFFS,
      roleList: ROLE,
      departmentList: DEPARTMENTS,
    };
  }

  render() {
    return (
      <div className="container appBody">
        <Menu />
        <StaffList
          staffList={this.state.staffList}
          roleList={this.state.roleList}
          departmentList={this.state.departmentList}
        />
      </div>
    );
  }
}

export default App;
