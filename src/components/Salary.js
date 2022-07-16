import React, { useState } from "react";
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
import LoadingSpinner from "./LoadingSpinner";

// RJS101x_asm4_honglcfx16049

// ======================================================================================
// MAIN FUNCTION
// ======================================================================================
const Salary = (props) => {
  const [salaryList, setSalaryList] = useState(props.salarysObject.salaryList);

  const propsObject = props.salarysObject;

  const TestingRenderList = (list) => {
    let _list = list.map((item) => item.salary / 10000);
    return _list;
  };

  // Sort staff list theo option truyền vào
  const sortSalaryByOption = (sortOption) => {
    let list = [...salaryList];
    if (sortOption == "maNV") {
      // Sort theo mã NV
      list = list.sort((firstItem, secondItem) => {
        return firstItem.id - secondItem.id;
      });
      console.log("list sort theo mã nv:", TestingRenderList(list));
    } else if (sortOption == "giamDan") {
      // Sort theo lương giảm dần (cao xuống thấp)
      list = list.sort((firstItem, secondItem) => {
        return secondItem.salary - firstItem.salary;
      });
      console.log("list sort lương giảm dần:", TestingRenderList(list));
    } else if (sortOption == "tangDan") {
      // Sort theo lương tăng dần (thấp lên cao)
      list = list.sort((firstItem, secondItem) => {
        return firstItem.salary - secondItem.salary;
      });
      console.log("list sort lương tăng dần:", TestingRenderList(list));
    }

    setSalaryList(list);
  };

  // Xử lí khi input option thay đổi
  const handleChange = (event) => {
    console.log("handleChange");
    // Sort staff list theo option truyền vào
    sortSalaryByOption(event.target.value);
    if (salaryList.length == 0) {
      setSalaryList(props.salarysObject.salaryList);
    }
  };

  // Render sort option input
  const renderInput = () => {
    return (
      <FormGroup className="d-flex">
        <label className="m-2">Sắp xếp theo </label>
        <select name="sortOption" id="sortOption" onChange={handleChange}>
          <option value="maNV">Mã nhân viên</option>
          <option value="giamDan">Lương giảm dần</option>
          <option value="tangDan">Lương tăng dần</option>
        </select>
      </FormGroup>
    );
  };

  // render list đã được sắp xếp
  const renderSortedList = (list) => {
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

  // Render kết quả fetch data từ server
  const renderResponeFromServer = () => {
    // setSalaryList(propsObject.salaryList);
    console.log("component state list:", salaryList);
    console.log("props list:", propsObject.salaryList);
    if (propsObject.isLoading) {
      return <LoadingSpinner />;
    } else if (propsObject.errorMessage) {
      return <h4 className="text-danger">{propsObject.errorMessage}</h4>;
      // Trường hợp render list kết quả search
    } else if (salaryList.length != 0) {
      return <>{renderSortedList(salaryList)}</>;
    } else {
      return <>{renderSortedList(propsObject.salaryList)}</>;
    }
  };

  // ================================
  // RETURN
  // ================================

  return (
    <section className="component_bg">
      <Header />
      <div className="container">
        <h1>Bảng lương</h1>
        <hr />
        {renderInput()}
        <div className="row">
          {/* RENDER SALARY LIST */}
          {renderResponeFromServer()}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Salary;
