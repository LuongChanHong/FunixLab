import "../style/style.css";
import React, { Component } from "react";
import dateFormat from "dateformat";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

// import StaffDetail from "./StaffDetail";

class StaffList extends Component {
  constructor(props) {
    // console.log("constructor");
    super(props);
    this.state = {
      staffList: this.props.staffList,
      roleList: this.props.roleList,
      department: this.props.departmentList,
      selectedStaff: null,
      gitColumnTotal: 12,
      column: 2,
    };
  }

  selectStaff(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaffDetail(staff) {
    if (staff != null) {
      return (
        <div className="col-12 my-3">
          <Card>
            <CardBody>
              <CardTitle>
                <h5>{staff.name}</h5>
              </CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Phòng ban: {staff.department.name}</CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      <></>;
    }
  }

  // col-lg-4 col-md-6 col-sm-12
  renderStaff() {
    let staffListHTML = this.state.staffList.map((staff) => {
      return (
        <div
          key={staff.id}
          className={`col-${Math.trunc(
            this.state.gitColumnTotal / this.state.column
          )}  my-1`}
        >
          <Card
            onClick={() => {
              this.selectStaff(staff);
            }}
            className="text-center p-1 pointer"
          >
            {staff.name}
          </Card>
        </div>
      );
    });
    return staffListHTML;
  }

  changeColumnNumber() {
    let colNum = document.getElementById("column_input");
    const warning = document.querySelector(".warningText");

    if (colNum.value > 4) {
      colNum.value = 4;
      warning.classList.remove("hidden");
    } else if (colNum.value < 2) {
      colNum.value = 2;
      warning.classList.remove("hidden");
    } else {
      this.setState({ column: colNum.value });
      warning.classList.add("hidden");
    }
  }

  render() {
    // console.log("render");
    return (
      <section>
        <div className="row">{this.renderStaff()}</div>
        <div className="row my-3">
          <form className="col-12">
            <label>column input: </label>
            <input
              id="column_input"
              type="number"
              className="border-0 mx-2"
              defaultValue={this.state.column}
              onInput={() => this.changeColumnNumber()}
            />
            <label className="warningText hidden text-danger">
              column number must not be {"<"} 2 or {">"} 4
            </label>
          </form>
        </div>
        <div className="row">
          {this.renderStaffDetail(this.state.selectedStaff)}
        </div>
      </section>
    );
  }
}

export default StaffList;
