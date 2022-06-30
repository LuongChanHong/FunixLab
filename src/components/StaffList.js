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
} from "reactstrap";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: this.props.staffList,
      isModalOpen: false,
      staffModel: {
        id: "",
        name: "",
        doB: "",
        salaryScale: "",
        startDate: "",
        department: "",
        annualLeave: "",
        overTime: "",
        image: "/assets/images/alberto.png",
        salary: "",
      },
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

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  setInputToState = (event) => {
    const input = event.target;
    this.setState({
      staffModel: {
        ...this.state.staffModel,
        [input.name]: input.value,
        id: Math.floor(Math.random() * 999) + 100,
      },
    });
  };

  addNewStaff = (event) => {
    this.setState({
      staffList: [...this.state.staffList, this.state.staffModel],
    });
    console.log(this.state.staffList);
    this.toggleModal();
    event.preventDefault();
  };

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
            <Form onSubmit={this.addNewStaff}>
              {/* FORM ITEM nameInput*/}
              <FormGroup row>
                <Label md={4} htmlFor="nameInput">
                  Họ tên:
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="nameInput"
                    name="name" // phải trùng với thuộc tính state muốn gán
                    value={this.state.staffModel.name} // value sẽ hiện trong input html
                    onChange={this.setInputToState}
                  />
                </Col>
              </FormGroup>
              {/* FORM ITEM birthInput*/}
              <FormGroup row>
                <Label md={4} htmlFor="birthInput">
                  Ngày sinh:
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="birthInput"
                    name="doB" // phải trùng với thuộc tính state muốn gán
                    value={this.state.staffModel.doB} // value sẽ hiện trong input html
                    onChange={this.setInputToState}
                  />
                </Col>
              </FormGroup>
              {/* FORM ITEM depInput*/}
              <FormGroup row>
                <Label md={4} htmlFor="depInput">
                  Phòng ban:
                </Label>
                <Col md={8}>
                  <Input
                    type="select"
                    id="depInput"
                    name="department" // phải trùng với thuộc tính state muốn gán
                    value={this.state.staffModel.department} // value sẽ hiện trong input html
                    onChange={this.setInputToState}
                  >
                    <option>Select</option>
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                </Col>
              </FormGroup>
              {/* FORM ITEM scaleInput*/}
              <FormGroup row>
                <Label md={4} htmlFor="scaleInput">
                  Hệ số lương:
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="scaleInput"
                    name="salaryScale" // phải trùng với thuộc tính state muốn gán
                    value={this.state.staffModel.salaryScale} // value sẽ hiện trong input html
                    onChange={this.setInputToState}
                  />
                </Col>
              </FormGroup>
              {/* FORM ITEM OTInput*/}
              <FormGroup row>
                <Label md={4} htmlFor="OTInput">
                  Ngày làm thêm:
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="OTInput"
                    name="overTime" // phải trùng với thuộc tính state muốn gán
                    value={this.state.staffModel.overTime} // value sẽ hiện trong input html
                    onChange={this.setInputToState}
                  />
                </Col>
              </FormGroup>
              {/* FORM ITEM dayOffInput*/}
              <FormGroup row>
                <Label md={4} htmlFor="dayOffInput">
                  Số ngày nghỉ:
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="dayOffInput"
                    name="annualLeave" // phải trùng với thuộc tính state muốn gán
                    value={this.state.staffModel.annualLeave} // value sẽ hiện trong input html
                    onChange={this.setInputToState}
                  />
                </Col>
              </FormGroup>
              {/* FORM ITEM startInput*/}
              <FormGroup row>
                <Label md={4} htmlFor="startInput">
                  Ngày vào công ty:
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="startInput"
                    name="startDate" // phải trùng với thuộc tính state muốn gán
                    value={this.state.staffModel.startDate} // value sẽ hiện trong input html
                    onChange={this.setInputToState}
                  />
                </Col>
              </FormGroup>
              {/* FORM ITEM submit button*/}
              <FormGroup row>
                <div className="d-flex justify-content-center">
                  <Button size="lg" color="success" type="submit">
                    Thêm nhân viên
                  </Button>
                </div>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </section>
    );
  }
}

export default StaffList;
