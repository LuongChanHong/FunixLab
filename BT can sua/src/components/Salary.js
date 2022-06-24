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
      sortOption: null,
      sortedList: this.props.staffList,
    };
  }

  // Tính lương nhân viên
  calcuStaffSalary = (list) => {
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

  // Xếp theo lương cao nhất
  sortByHightSalary = () => {
    // console.log("sortBySalary");
    // let sortOption = this.state.sortOption;
    let list = this.state.sortedList;
    let i, j, temp;
    temp = i = j = 0;
    for (let h = 0; h < list.length - 1; h++) {
      for (let i = 1; i < list.length; i++) {
        j = i - 1;
        if (list[j].salary < list[i].salary) {
          temp = list[j].salary;
          list[j].salary = list[i].salary;
          list[i].salary = temp;
        }
      }
    }

    let salary = [];
    list.forEach((item) => salary.push(item.salary));
    console.log(salary);
    this.setState({ sortedList: list });
  };

  renderSalaryBySortOption = () => {
    if (this.state.sortOption == "maNV") {
      console.log("sort theo mã NV");
    } else if (this.state.sortOption == "giamDan") {
      // this.sortByHightSalary();
      this.state.sortedList.sort((firstItem, secondItem) => {
        return (
          secondItem.salaryScale * basicSalary +
          secondItem.overTime * overTimeSalary -
          (firstItem.salaryScale * basicSalary +
            firstItem.overTime * overTimeSalary)
        );
      });
      console.log("sort theo lương giảm dần");
    } else if (this.state.sortOption == "tangDan") {
      this.state.sortedList.sort((firstItem, secondItem) => {
        return (
          firstItem.salaryScale * basicSalary +
          firstItem.overTime * overTimeSalary -
          (secondItem.salaryScale * basicSalary +
            secondItem.overTime * overTimeSalary)
        );
      });
      console.log("sort theo lương tăng dần");
    }
  };

  // Set new sortOption in state
  handleChange = (event) => {
    this.setState({ sortOption: event.target.value });
    // console.log("event.target.value:", event.target.value);
    this.renderSalaryBySortOption();
  };

  // MAIN RENDER FUNCTION
  render() {
    {
      this.calcuStaffSalary(this.props.staffList);
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
