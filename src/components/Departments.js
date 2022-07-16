import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import dateFormat from "dateformat";

import Header from "./Header";
import Footer from "./Footer";
import DepartmentItem from "./DepartmentItem";
import LoadingSpinner from "./LoadingSpinner";
import { fetchAPI } from "../redux/fetchMethod";

// ======================================================================================
// MAIN FUNCTION
// ======================================================================================

function Departments(props) {
  const [depmId, setDepmId] = useState("");
  const [isModalOpen, setIsModaOpen] = useState(false);
  const [selectedDemp, setSelectedDemp] = useState({});
  const [departmentStaffs, setDepartmentStaffs] = useState([]);

  const propsObject = props.departmentsObject;

  // Fetch staff list theo phòng ban từ api
  const fetchStaffOfDepartment = (id) => {
    fetchAPI("departments/" + id)
      .then((data) => setDepartmentStaffs(data))
      .catch((error) => console.log(error));
  };

  // Set data cần thiết cho staffs modal
  const setStaffsModalData = (id) => {
    let selectDemp = propsObject.depmList.find((depm) => depm.id == id);
    setSelectedDemp(selectDemp);
    fetchStaffOfDepartment(id);
  };

  // Nhận id phòng từ DepartmentItem và hiện modal staffs
  const getDepartmentId = (id) => {
    setDepmId(id);
    setIsModaOpen(true);
    setStaffsModalData(id);
  };

  // Render ra Presentational Component
  const renderDepartments = (list) => {
    return list.map((item) => (
      <DepartmentItem
        getDepartmentId={getDepartmentId}
        key={item.id}
        department={item}
      />
    ));
  };

  // Render staff list theo phòng ban
  const renderStaffInDepartment = (list) => {
    if (list.length == 0) {
      return <LoadingSpinner />;
    } else {
      return list.map((staff) => (
        <div key={staff.id} className="col-sm-12 col-md-6 my-2">
          <Card>
            <CardBody>
              <CardTitle className="text-danger">{staff.name}</CardTitle>
              <CardText className="m-0">
                Năm sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText className="mx-0 mt-0 mb-1">
                Vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText className="m-0 text-danger">
                Lương: {new Intl.NumberFormat().format(staff.salary)}
              </CardText>
            </CardBody>
          </Card>
        </div>
      ));
    }
  };

  // Render kết quả fetch data từ server
  const renderResponeFromServer = () => {
    if (propsObject.isLoading) {
      return <LoadingSpinner />;
    } else if (propsObject.errorMessage) {
      return <h4 className="text-danger">{propsObject.errorMessage}</h4>;
      // Trường hợp render list kết quả search
    } else {
      return <>{renderDepartments(propsObject.depmList)}</>;
    }
  };

  // ================================
  // RETURN
  // ================================
  return (
    <section className="component_bg">
      <Header />
      <div className="container">
        <h1>Phòng ban</h1>
        <hr />
        <div className="row">{renderResponeFromServer()}</div>
        {/* MODAL DANH SÁCH NV THEO PHÒNG BAN */}
        <Modal isOpen={isModalOpen}>
          <ModalHeader toggle={() => setIsModaOpen(false)}>
            Nhân sự phòng {selectedDemp.name}
          </ModalHeader>
          <ModalBody>
            <section className="container">
              <div className="row">
                {renderStaffInDepartment(departmentStaffs)}
              </div>
            </section>
          </ModalBody>
        </Modal>
      </div>
      <Footer />
    </section>
  );
}

export default Departments;
/*  */
