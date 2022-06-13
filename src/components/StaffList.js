import "../style/style.css";
import React, { Component } from "react";
import dateFormat from "dateformat";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

// import StaffDetail from "./StaffDetail";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: this.props.staffList,
      roleList: this.props.roleList,
      department: this.props.departmentList,
      selectedStaff: null,
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
              <CardText>Phòng ban: </CardText>
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

  renderStaff() {
    let staffListHTML = this.state.staffList.map((staff) => {
      return (
        <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12 my-1">
          <Card
            onClick={() => {
              this.selectStaff(staff);
            }}
          >
            {staff.name}
          </Card>
        </div>
      );
    });
    return staffListHTML;
  }

  render() {
    return (
      <section>
        <div className="row">{this.renderStaff()}</div>
        <div className="row">
          {this.renderStaffDetail(this.state.selectedStaff)}
        </div>
      </section>
    );
  }
}

export default StaffList;
