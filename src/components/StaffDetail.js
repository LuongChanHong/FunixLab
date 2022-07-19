import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";
import { fetchAPI } from "../redux/fetchMethod.js";
import { Response } from "cross-fetch";

// ======================================================================================
// MAIN FUNCTION
// ======================================================================================

function StaffDetail(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let { id } = useParams();
  let renderStaff = props.staffList.find((item) => item.id == id);
  let renderDepartment = props.depmList.find(
    (item) => item.id === renderStaff.departmentId
  );
  /**
   * Lỗi renderStaff undefined khi reload
   * 1 số suy nghĩ để sửa:
   * - lưu renderStaff xuống localStorage (Có thể lộ thông tin user trong thực tế)
   * - gọi api lấy staff/ staff list, sau đó hiện staff từ props khi đợi staff từ api (có độ trễ nhất định, chưa có code cụ thể)
   */
  // let staffFromProps = props.staffList.find((item) => item.id == id);
  // let depmFromProps = props.depmList.find(
  //   (item) => item.id === staffFromProps.departmentId
  // );

  // let staffList = [];
  // let depmList = [];
  // let staffFromFetch = {};
  // let depmFromFetch = {};
  // fetchAPI("staffs").then((list) => (staffList = list));
  // fetchAPI("departments").then((list) => (depmList = list));

  // setTimeout(() => {
  //   staffFromFetch = staffList.find((item) => item.id == id);
  //   depmFromFetch = depmList.find(
  //     (item) => item.id == staffFromFetch.departmentId
  //   );
  // }, 1000);

  // let renderStaff = staffFromFetch ? staffFromProps : staffFromFetch;
  // let renderDepartment = depmFromFetch ? depmFromProps : depmFromFetch;

  // setTimeout(() => {
  //   console.log("staffFromFetch:", staffFromFetch);
  //   console.log("depmFromFetch:", depmFromFetch);
  // }, 1000);
  // console.log("staffFromProps:", staffFromProps);
  // console.log("depmFromProps:", depmFromProps);

  // const deleteStaff = (id) => {
  //   fetch("https://rjs101xbackend.herokuapp.com/staffs" + "/" + id, {
  //     method: "DELETE",
  //   }).then((response) => console.log("response:", response));
  // };

  // ================================
  // RETURN
  // ================================
  return (
    <div className="component_bg">
      <Header />
      <div className="container px-4">
        <Breadcrumb className="mt-3">
          <BreadcrumbItem>
            <Link className="text-decoration-none text-white" to="/staff">
              Nhân viên
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <p className="breadcrumb_text">{renderStaff.name}</p>
          </BreadcrumbItem>
          <br />
        </Breadcrumb>
        <div className="mb-5 mt-3">
          <div className="row d-flex">
            <img
              className="col-sm-12 col-md-4 col-lg-3"
              src={renderStaff.image}
            />
            <div className="col-sm-12 col-md-8 col-lg-9 p-3">
              <h3>Họ và tên: {renderStaff.name}</h3>
              <p>
                Ngày sinh: {dateFormat(new Date(renderStaff.doB), "dd/mm/yyyy")}
              </p>
              <p>
                Ngày vào công ty:{" "}
                {dateFormat(new Date(renderStaff.startDate), "dd/mm/yyyy")}
              </p>
              <p>
                Phòng ban: <span>{renderDepartment.name}</span>
              </p>
              <p>Số ngày nghỉ còn lại: {renderStaff.annualLeave}</p>
              <p>Số ngày làm thêm: {renderStaff.overTime}</p>
              <Button color="danger" onClick={() => setIsModalOpen(true)}>
                Xóa nhân viên
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* MODAL XÓA NHÂN VIÊN */}
      <Modal isOpen={isModalOpen}>
        <ModalBody>
          <div className="d-flex justify-content-between">
            <h4>Xóa {renderStaff.name}?</h4>
            <button
              className="staff-delete-btn"
              onClick={() => setIsModalOpen(false)}
            >
              ❌
            </button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button size="lg" color="success">
              <Link
                to="/staff"
                onClick={() => props.deleteDataMethod("staffs", renderStaff.id)}
                className="text-decoration-none text-white"
              >
                Xóa
              </Link>
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default StaffDetail;
