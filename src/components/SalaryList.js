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

class SalaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOption: null,
    };
  }

  renderSaraly = (list) => {
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
            Lương:{" "}
            {new Intl.NumberFormat().format(
              Math.round(staff.salaryScale * 3000000 + staff.overTime * 200000)
            )}{" "}
            vnđ
          </CardFooter>
        </Card>
      </div>
    ));
  };

  sortBySalary = () => {
    let sortOption = this.state.sortOption;
  };

  handleChange = (event) => {
    this.setState({ sortOption: event.target.value });
  };

  renderInput = () => {
    return (
      <FormGroup className="d-flex">
        <label className="m-2">Sắp xếp theo </label>
        <select name="sortOption" id="sortOption" onChange={this.handleChange}>
          <option value="maNV">Mã nhân viên</option>
          <option value="luongTang">Lương tăng dần</option>
          <option value="luongGiam">Lương giảm dần</option>
        </select>
      </FormGroup>
    );
  };

  render() {
    return (
      <section className="component_bg">
        <Header />
        <div className="container">
          <h1>Bảng lương</h1>
          <hr />
          {this.renderInput()}
          {this.state.sortOption != null ? this.sortBySalary() : ``}
          <div className="row">{this.renderSaraly(this.props.staffList)}</div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default SalaryList;
