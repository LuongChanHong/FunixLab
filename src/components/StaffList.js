//RJS101x_asm3_honglcfx16049_PART_1
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
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  FormFeedback,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: this.props.staffList,
      isModalOpen: false,
    };
  }

  // Render danh sách staff
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

  // HTML sẽ hiện ra khi search không có kết quả
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

  // Tắt mở form thêm staff
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  // Thêm staff mới vào staffList
  addNewStaff = (value) => {
    // Thêm thuộc tính id và image
    const id = Math.floor(Math.random() * 999) + 100;
    const newStaff = { ...value, image: "/assets/images/alberto.png", id: id };
    console.log("newStaff:", newStaff);
    this.setState({
      staffList: [...this.state.staffList, newStaff],
    });
    this.toggleModal();
  };

  customDateControl = (props) => (
    <Input
      type="date"
      className="form-control"
      id={`${props.id}`}
      name={`${props.name}`}
    />
  );

  render() {
    return (
      <section className="component_bg">
        <Header />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <h1>Nhân viên</h1>
              <div className="m-2">
                <Button onClick={() => this.toggleModal()} color="success">
                  ➕
                </Button>
              </div>
            </div>
            {/* UNCONTROLLED FORM */}
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

        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          {/* CONTROLLED FORM */}
          <ModalBody>
            <LocalForm onSubmit={(value) => this.addNewStaff(value)}>
              {/* FORM ITEM nameInput*/}
              <Row className="form-group">
                <Label md={4} htmlFor="nameInput">
                  Họ tên:
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    id="nameInput"
                    name="name"
                    className="form-control"
                  />
                </Col>
              </Row>
              {/* FORM ITEM birthInput*/}
              <Row className="form-group">
                <Label md={4} htmlFor="birthInput">
                  Ngày sinh:
                </Label>
                <Col md={8}>
                  <Control
                    model=".doB"
                    id="birthInput"
                    name="doB"
                    // className="form-control"
                    component={this.customDateControl}
                    controlProps={{
                      name: "doB",
                      id: "birthInput",
                    }}
                  />
                </Col>
              </Row>
              {/* FORM ITEM depInput*/}
              <Row className="form-group">
                <Label md={4} htmlFor="depInput">
                  Phòng ban:
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    id="depInput"
                    name="department"
                    className="form-control"
                  >
                    <option>Select</option>
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
                </Col>
              </Row>
              {/* FORM ITEM scaleInput*/}
              <Row className="form-group">
                <Label md={4} htmlFor="scaleInput">
                  Hệ số lương:
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".salaryScale"
                    id="scaleInput"
                    name="salaryScale"
                    className="form-control"
                  />
                </Col>
              </Row>
              {/* FORM ITEM OTInput*/}
              <Row className="form-group">
                <Label md={4} htmlFor="OTInput">
                  Ngày làm thêm:
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".overTime"
                    id="OTInput"
                    name="overTime"
                    className="form-control"
                  />
                </Col>
              </Row>
              {/* FORM ITEM dayOffInput*/}
              <Row className="form-group">
                <Label md={4} htmlFor="dayOffInput">
                  Số ngày nghỉ:
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".annualLeave"
                    id="OTInput"
                    name="annualLeave"
                    className="form-control"
                  />
                </Col>
              </Row>
              {/* FORM ITEM startInput*/}
              <Row className="form-group">
                <Label md={4} htmlFor="startInput">
                  Ngày vào công ty:
                </Label>
                <Col md={8}>
                  <Control
                    model=".startDate"
                    // id="startInput"
                    // name="startDate"
                    // className="form-control"
                    component={this.customDateControl}
                    controlProps={{
                      name: "startDate",
                      id: "startInput",
                    }}
                  />
                </Col>
              </Row>
              {/* FORM ITEM submit button*/}
              <Row className="form-group">
                <div className="d-flex justify-content-center">
                  <Button size="lg" color="success" type="submit">
                    Thêm nhân viên
                  </Button>
                </div>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </section>
    );
  }
}

export default StaffList;
