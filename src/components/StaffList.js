//RJS101x_asm3_honglcfx16049
//RJS101x_asm3_honglcfx16049 PART_1
import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: this.props.staffList,
    };
  }

  renderStaffList = (list) => {
    return list.map((staff) => (
      <div key={staff.id} className="col-sm-6 col-md-4 col-lg-2 my-1">
        <Card>
          <Link to={`/staff/${staff.id}`}>
            <CardImg src={staff.image} alt="avatar-img" />
            <CardBody>
              <CardText className="text-center">{staff.name}</CardText>
            </CardBody>
          </Link>
        </Card>
      </div>
    ));
  };

  handleStaffListNull = () => {
    return <h4 className="text-center text-danger">Không tìm thấy</h4>;
  };

  // Tìm theo tên nhân viên
  searchByName = (event) => {
    const searchInput = this.searchInput.value;
    let list = [];
    this.props.staffList.forEach((staff) => {
      if (staff.name.toLowerCase().includes(searchInput.toLowerCase())) {
        list.push(staff);
      }
    });
    this.setState({ staffList: list });
    event.preventDefault();
  };

  render() {
    // console.log(this.props.staffList);
    return (
      <section className="component_bg">
        <Header />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <h1>Nhân viên</h1>
              <div className="m-2">
                <Button onClick={() => alert("click")} color="success">
                  ➕
                </Button>
              </div>
            </div>
            <div>
              <Form onSubmit={this.searchByName} className="d-flex">
                <Input
                  type="text"
                  id="searchInput"
                  name="searchInput"
                  innerRef={(inputValue) => (this.searchInput = inputValue)}
                />
                <Button type="submit" value="" color="success" className="">
                  🔍
                </Button>
              </Form>
            </div>
          </div>

          <hr />

          <div className="row">
            {this.state.staffList.length == 0
              ? this.handleStaffListNull()
              : this.renderStaffList(this.state.staffList)}
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default StaffList;
