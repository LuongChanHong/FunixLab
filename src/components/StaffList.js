import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Form,
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
import DatePicker from "react-datepicker";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

// Hằng số dùng nhiều lần
const MIN_INPUT_LIMIT_I = 1;
const MIN_INPUT_LIMIT_II = 3;
const MAX_INPUT_LIMIT_I = 10;
const MAX_INPUT_LIMIT_II = 30;

// Điều kiện validation
const requireValue = (value) => value && value.length;
const maxLengthValue = (length) => (value) =>
  !value || value.length <= length || isNaN(Number(value));
const minLengthValue = (length) => (value) =>
  value && value.length >= length && isNaN(Number(value));
const isNumberBiggerLimit = (maxLimit) => (value) =>
  !isNaN(Number(value)) && value >= MIN_INPUT_LIMIT_I && value <= maxLimit;

// const isCharValue = (value) => isNaN(Number(value));
const isDepValid = (value) => value && value.length && value !== "Select";

const StaffList = (props) => {
  const [staffList, setStaffList] = useState(props.staffsObject.staffList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doB, setDoB] = useState("");
  const [startDate, setStartDate] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchedList, setSearchedList] = useState(null);
  const [isSearchedList, setIsSearchedList] = useState(false);

  // useEffect(() => {
  //   setStaffList(staffList);
  // }, [staffList]);

  // Render danh sách staff
  const renderStaffList = (list) => {
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

  // Tìm theo tên nhân viên
  const searchByName = (event) => {
    let list = [];

    [...staffList].forEach((staff) => {
      if (staff.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
        list.push(staff);
      }
    });

    list.length != 0 ? setIsSearchedList(true) : setIsSearchedList(false);
    setSearchedList(list);
    event.preventDefault();
  };

  // Tắt mở form thêm staff
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Thêm staff mới vào staffList
  const addNewStaff = (value) => {
    // Thêm thuộc tính id và image
    const id = Math.floor(Math.random() * 999) + 100;
    const newStaff = {
      ...value,
      image: "/assets/images/alberto.png",
      id: id,
      doB: dateFormat(doB, "dd/mm/yyyy"),
      startDate: dateFormat(startDate, "dd/mm/yyyy"),
    };
    const list = [...staffList, newStaff];
    setStaffList(list);

    alert(JSON.stringify(newStaff));
    toggleModal();
  };

  return (
    <section className="component_bg">
      <Header />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* MODAL BUTTON THÊM NV MỚI */}
          <div className="d-flex align-items-center">
            <h1>Nhân viên</h1>
            <div className="m-2">
              <Button onClick={() => toggleModal()} color="success">
                ➕
              </Button>
            </div>
          </div>
          {/* UNCONTROLLED FORM */}
          <div>
            <Form onSubmit={searchByName} className="d-flex align-items-center">
              <Input
                type="text"
                id="searchInput"
                name="searchInput"
                innerRef={(inputValue) => {
                  setSearchInput(inputValue);
                }}
              />
              <Button type="submit" value="" color="success" className="">
                🔍
              </Button>
            </Form>
          </div>
        </div>
        {/* THÔNG BÁO KHÔNG TÌM THẤY NV */}
        {searchedList != null && searchedList.length === 0 ? (
          <h4 className="text-end text-danger my-0">Không tìm thấy</h4>
        ) : (
          <></>
        )}
        <hr />
        {/* DANH SÁCH NV */}
        <div className="row">
          {props.staffsObject.isLoading ? (
            <LoadingSpinner />
          ) : isSearchedList ? (
            renderStaffList(searchedList)
          ) : (
            renderStaffList(props.staffsObject.staffList)
          )}
        </div>
      </div>
      <Footer />

      <Modal isOpen={isModalOpen}>
        <ModalHeader toggle={toggleModal}>Thêm nhân viên</ModalHeader>
        {/* CONTROLLED FORM */}
        <ModalBody>
          <LocalForm onSubmit={(value) => addNewStaff(value)}>
            {/* FORM ITEM nameInput*/}
            <Row className="form-group mb-2">
              <Label md={4} htmlFor="nameInput">
                Họ tên:
              </Label>
              <Col md={8}>
                <Control.text
                  model=".name"
                  id="nameInput"
                  name="name"
                  className="form-control"
                  validators={{
                    minLengthValue: minLengthValue(MIN_INPUT_LIMIT_II),
                    maxLengthValue: maxLengthValue(MAX_INPUT_LIMIT_II),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    minLengthValue: `Nhập kí tự ngắn hơn ${MIN_INPUT_LIMIT_II} kí tự`,
                    maxLengthValue: `Nhập kí tự dài hơn ${MAX_INPUT_LIMIT_II} kí tự`,
                  }}
                />
              </Col>
            </Row>
            {/* FORM ITEM birthInput*/}
            <Row className="form-group mb-2">
              <Label md={4} htmlFor="birthInput">
                Ngày sinh:
              </Label>
              <Col md={8}>
                <DatePicker
                  id="birthInput"
                  name="doB"
                  className="form-control"
                  selected={doB}
                  onChange={(date) => setDoB(date)}
                />
              </Col>
            </Row>
            {/* FORM ITEM depInput*/}
            <Row className="form-group mb-2">
              <Label md={4} htmlFor="depInput">
                Phòng ban:
              </Label>
              <Col md={8}>
                <Control.select
                  model=".department"
                  id="depInput"
                  name="department"
                  className="form-control"
                  validators={{
                    isDepValid,
                  }}
                >
                  <option>Select</option>
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".department"
                  show="touched"
                  messages={{
                    isDepValid: "Không hợp lệ",
                  }}
                />
              </Col>
            </Row>
            {/* FORM ITEM scaleInput*/}
            <Row className="form-group mb-2">
              <Label md={4} htmlFor="scaleInput">
                Hệ số lương:
              </Label>
              <Col md={8}>
                <Control.text
                  model=".salaryScale"
                  id="scaleInput"
                  name="salaryScale"
                  className="form-control"
                  validators={{
                    isNumberBiggerLimit: isNumberBiggerLimit(MAX_INPUT_LIMIT_I),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".salaryScale"
                  show="touched"
                  messages={{
                    isNumberBiggerLimit: `Nhập số từ ${MIN_INPUT_LIMIT_I} đến ${MAX_INPUT_LIMIT_I}`,
                  }}
                />
              </Col>
            </Row>
            {/* FORM ITEM OTInput*/}
            <Row className="form-group mb-2">
              <Label md={4} htmlFor="OTInput">
                Ngày làm thêm:
              </Label>
              <Col md={8}>
                <Control.text
                  model=".overTime"
                  id="OTInput"
                  name="overTime"
                  className="form-control"
                  validators={{
                    isNumberBiggerLimit:
                      isNumberBiggerLimit(MAX_INPUT_LIMIT_II),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    isNumberBiggerLimit: `Nhập số từ ${MIN_INPUT_LIMIT_I} đến ${MAX_INPUT_LIMIT_II}`,
                  }}
                />
              </Col>
            </Row>
            {/* FORM ITEM dayOffInput*/}
            <Row className="form-group mb-2">
              <Label md={4} htmlFor="dayOffInput">
                Số ngày nghỉ:
              </Label>
              <Col md={8}>
                <Control.text
                  model=".annualLeave"
                  id="OTInput"
                  name="annualLeave"
                  className="form-control"
                  validators={{
                    isNumberBiggerLimit:
                      isNumberBiggerLimit(MAX_INPUT_LIMIT_II),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    isNumberBiggerLimit: `Nhập số từ ${MIN_INPUT_LIMIT_I} đến ${MAX_INPUT_LIMIT_II}`,
                  }}
                />
              </Col>
            </Row>
            {/* FORM ITEM startInput*/}
            <Row className="form-group mb-2">
              <Label md={4} htmlFor="startInput">
                Ngày vào công ty:
              </Label>
              <Col md={8}>
                <DatePicker
                  id="startInput"
                  name="startDate"
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
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
};

export default StaffList;
