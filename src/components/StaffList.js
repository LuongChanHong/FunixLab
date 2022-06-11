import "../style/style.css";
import React, { Component } from "react";

import Staff from "./Staff";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: this.props.staffList,
      roleList: this.props.roleList,
      departmentList: this.props.departmentList,
    };
  }

  renderStaff() {
    let staffListHTML = this.state.staffList.map((staff) => {
      return <Staff staffObject={staff} />;
    });
    return staffListHTML;
  }

  render() {
    return (
      <section className="row">
        <div className="col-12">{this.renderStaff()}</div>
      </section>
    );
  }
}

export default StaffList;
