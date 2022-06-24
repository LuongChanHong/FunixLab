import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardHeader,
  FormGroup,
  Input,
} from "reactstrap";

import Header from "./Header";
import Footer from "./Footer";

const basicSalary = 3000000;
const overTimeSalary = 200000;

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedList: this.props.staffList,
    };
  }

  // Tính lương tất cả nhân viên
  calcuAllStaffSalary = (list) => {
    list.forEach(
      (staff) =>
        (staff.salary = Math.round(
          staff.salaryScale * basicSalary + staff.overTime * overTimeSalary
        ))
    );
  };

  // Render sort option input
  renderInput = () => {
    return (
      <FormGroup className="d-flex">
        <label className="m-2">Sắp xếp theo </label>
        <select name="sortOption" id="sortOption" onChange={this.handleChange}>
          <option value="maNV">Mã nhân viên</option>
          <option value="giamDan">Lương giảm dần</option>
          <option value="tangDan">Lương tăng dần</option>
        </select>
      </FormGroup>
    );
  };

  // Render staff salary HTML item
  renderSaraly = (list) => {
    // console.log("renderSaraly");
    return list.map((staff) => (
      <div key={staff.id} className="col-sm-12 col-md-6 col-lg-4 my-2">
        <Card outline>
          <CardHeader>
            <h3 className="text-danger">{staff.name}</h3>
          </CardHeader>
          <CardBody>
            <CardText className="m-0">Mã NV: {staff.id}</CardText>
            <CardText className="m-0">Hệ số: {staff.salaryScale}</CardText>
            <CardText className="m-0">
              Ngày làm thêm: {staff.overTime} {"(ngày)"}
            </CardText>
          </CardBody>
          <CardFooter>
            Lương: {new Intl.NumberFormat().format(staff.salary)} vnđ
          </CardFooter>
        </Card>
      </div>
    ));
  };

  // Sort staff list theo option truyền vào
  renderSalaryBySortOption = (sortOption) => {
    let sortedList;
    if (sortOption == "maNV") {
      // Sort theo mã NV
      sortedList = this.state.sortedList.sort((firstItem, secondItem) => {
        return firstItem.id - secondItem.id;
      });
    } else if (sortOption == "giamDan") {
      // Sort theo lương giảm dần (cao xuống thấp)
      sortedList = this.state.sortedList.sort((firstItem, secondItem) => {
        return secondItem.salary - firstItem.salary;
      });
    } else if (sortOption == "tangDan") {
      // Sort theo lương tăng dần (thấp lên cao)
      sortedList = this.state.sortedList.sort((firstItem, secondItem) => {
        return firstItem.salary - secondItem.salary;
      });
    }
    this.setState({ sortedList: sortedList });
  };

  // Xử lí khi input option thay đổi
  handleChange = (event) => {
    // Sort staff list theo option truyền vào
    this.renderSalaryBySortOption(event.target.value);
  };

  // MAIN RENDER FUNCTION
  render() {
    {
      this.calcuAllStaffSalary(this.props.staffList);
    }
    return (
      <section className="component_bg">
        <Header />
        <div className="container">
          <h1>Bảng lương</h1>
          <hr />
          {this.renderInput()}
          <div className="row">{this.renderSaraly(this.state.sortedList)}</div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default Salary;
