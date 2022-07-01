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
} from "reactstrap";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const MIN_NUM_LIMIT = 1;
const MAX_NUM_LIMIT = 30;
const MIN_CHAR_LIMIT = 3;
const MAX_CHAR_LIMIT = 30;

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
        annualLeave: null,
        overTime: "",
        image: "/assets/images/alberto.png",
        salary: "",
      },

      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
        annualLeave: false,
        overTime: false,
      },
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

  // Nhập nội dung input vào state khi submit
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

  // Thêm staff mới vào staffList
  addNewStaff = (event) => {
    this.setState({
      staffList: [...this.state.staffList, this.state.staffModel],
    });
    console.log(this.state.staffList);
    this.toggleModal();
    event.preventDefault();
  };

  // Đánh dấu các input đã được nhấp vào
  handleBlur = (inputName) => (event) => {
    this.setState({ touched: { ...this.state.touched, [inputName]: true } });
  };

  // Xét các input
  inputValidation = (
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime
  ) => {
    const error = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
    };
    const regular = /^\d+$/; // tất cả kí tự trong string phải là số

    // Xét tên
    if (
      this.state.touched.name &&
      (name.length < MIN_CHAR_LIMIT || name.length > MAX_CHAR_LIMIT)
    ) {
      error.name = `Họ tên phải có số kí tự >= ${MIN_CHAR_LIMIT} và <= ${MAX_CHAR_LIMIT}`;
    }

    // Xét hệ số lương
    if (
      (this.state.touched.salaryScale && !regular.test(salaryScale)) ||
      (this.state.touched.salaryScale &&
        (salaryScale < MIN_NUM_LIMIT || salaryScale > MAX_NUM_LIMIT))
    ) {
      error.salaryScale = `Hệ số là số từ ${MIN_NUM_LIMIT} đến ${MAX_NUM_LIMIT}`;
    }

    // Xét số ngày nghỉ
    if (
      (this.state.touched.annualLeave && !regular.test(annualLeave)) ||
      (this.state.touched.annualLeave &&
        (annualLeave < MIN_NUM_LIMIT || annualLeave > MAX_NUM_LIMIT))
    ) {
      error.annualLeave = `Số ngày nghỉ là số từ ${MIN_NUM_LIMIT} đến ${MAX_NUM_LIMIT}`;
    }

    // Xét số ngày làm thêm
    if (
      (this.state.touched.overTime && !regular.test(overTime)) ||
      (this.state.touched.overTime &&
        (overTime < MIN_NUM_LIMIT || overTime > MAX_NUM_LIMIT))
    ) {
      error.overTime = `Ngày làm thêm là số từ ${MIN_NUM_LIMIT} đến ${MAX_NUM_LIMIT}`;
    }

    // Xét phòng ban
    if (
      this.state.touched.department &&
      (department === "Select" || department === "")
    ) {
      error.department = "Phòng ban không hợp lệ";
    }

    // Xét ngày sinh
    if (this.state.touched.doB && doB === "") {
      error.doB = "Không được bỏ trống";
    }

    // Xét ngày vào công ty
    if (this.state.touched.startDate && startDate === "") {
      error.startDate = "Không được bỏ trống";
    }
    return error;
  };

  render() {
    // Nhận thông báo lỗi, hiện ra khi cần
    const error = this.inputValidation(
      this.state.staffModel.name,
      this.state.staffModel.doB,
      this.state.staffModel.salaryScale,
      this.state.staffModel.startDate,
      this.state.staffModel.department,
      this.state.staffModel.annualLeave,
      this.state.staffModel.overTime
    );

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
                    // valid={error.name === ""}
                    invalid={error.name !== ""}
                    onBlur={this.handleBlur("name")}
                  />
                  <FormFeedback>{error.name}</FormFeedback>
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
                    invalid={error.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                  />
                  <FormFeedback>{error.doB}</FormFeedback>
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
                    invalid={error.department !== ""}
                    onBlur={this.handleBlur("department")}
                  >
                    <option>Select</option>
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                  <FormFeedback>{error.department}</FormFeedback>
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
                    invalid={error.salaryScale !== ""}
                    onBlur={this.handleBlur("salaryScale")}
                  />
                  <FormFeedback>{error.salaryScale}</FormFeedback>
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
                    invalid={error.overTime !== ""}
                    onBlur={this.handleBlur("overTime")}
                  />
                  <FormFeedback>{error.overTime}</FormFeedback>
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
                    invalid={error.annualLeave !== ""}
                    onBlur={this.handleBlur("annualLeave")}
                  />
                  <FormFeedback>{error.annualLeave}</FormFeedback>
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
                    invalid={error.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                  />
                  <FormFeedback>{error.startDate}</FormFeedback>
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
