import React from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function StaffDetail(props) {
  let { id } = useParams();
  let selectedStaff = props.staffList.find((staff) => staff.id == id);

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
            <p className="breadcrumb_text">{selectedStaff.name}</p>
          </BreadcrumbItem>
          <br />
        </Breadcrumb>
        <div className="mb-5 mt-3">
          <div className="row d-flex">
            <img
              className="col-sm-12 col-md-4 col-lg-3 staff_detail_img"
              src={selectedStaff.image}
            />
            <div className="col-sm-12 col-md-8 col-lg-9 p-3">
              <h3>Họ và tên: {selectedStaff.name}</h3>
              <p>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</p>
              <p>
                Ngày vào công ty:{" "}
                {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}
              </p>
              <p>
                Phòng ban: <span>{selectedStaff.department.name}</span>
              </p>
              <p>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</p>
              <p>Số ngày làm thêm: {selectedStaff.overTime}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StaffDetail;
