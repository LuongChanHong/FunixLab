import React, { Component, useEffect, useState } from "react";
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

// RJS101x_asm4_honglcfx16049

const basicSalary = 3000000;
const overTimeSalary = 200000;

// Tính lương tất cả nhân viên
const calcuAllStaffSalary = (list) => {
  list.forEach(
    (staff) =>
      (staff.salary = Math.round(
        staff.salaryScale * basicSalary + staff.overTime * overTimeSalary
      ))
  );
};

// ======================================================================================
// MAIN FUNCTION
// ======================================================================================
const Salary = (props) => {
  const [sortedList, setSortedList] = useState(props.staffList);

  useEffect(() => {
    setSortedList(sortedList);
  }, [sortedList]);

  calcuAllStaffSalary(props.staffList);

  const renderList = (list) => {
    let _list = list.map((item) => item.salary / 10000);
    return _list;
  };

  // Render staff salary HTML item
  // const renderSaraly = () => {
  //   console.log("renderSaraly");
  //   return
  // };

  // Sort staff list theo option truyền vào
  const sortSalaryByOption = (sortOption) => {
    let list = [];
    if (sortOption == "maNV") {
      // Sort theo mã NV
      list = sortedList.sort((firstItem, secondItem) => {
        return firstItem.id - secondItem.id;
      });
      console.log("list sort theo mã nv:", renderList(list));
    } else if (sortOption == "giamDan") {
      // Sort theo lương giảm dần (cao xuống thấp)
      list = sortedList.sort((firstItem, secondItem) => {
        return secondItem.salary - firstItem.salary;
      });
      console.log("list sort lương giảm dần:", renderList(list));
    } else if (sortOption == "tangDan") {
      // Sort theo lương tăng dần (thấp lên cao)
      list = sortedList.sort((firstItem, secondItem) => {
        return firstItem.salary - secondItem.salary;
      });
      console.log("list sort lương tăng dần:", renderList(list));
    }
    setSortedList(list);
  };

  // Xử lí khi input option thay đổi
  const handleChange = (event) => {
    // Sort staff list theo option truyền vào
    sortSalaryByOption(event.target.value);
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

  return (
    <section className="component_bg">
      <Header />
      <div className="container">
        <h1>Bảng lương</h1>
        <hr />
        {renderInput()}
        <div className="row">
          {console.log("render")}
          {/* RENDER SALARY LIST */}
          {sortedList.map((staff) => (
            <div key={staff.id} className="col-sm-12 col-md-6 col-lg-4 my-2">
              <Card outline>
                <CardHeader>
                  <h3 className="text-danger">{staff.name}</h3>
                </CardHeader>
                <CardBody>
                  <CardText className="m-0">Mã NV: {staff.id}</CardText>
                  <CardText className="m-0">
                    Hệ số: {staff.salaryScale}
                  </CardText>
                  <CardText className="m-0">
                    Ngày làm thêm: {staff.overTime} {"(ngày)"}
                  </CardText>
                </CardBody>
                <CardFooter>
                  Lương: {new Intl.NumberFormat().format(staff.salary)} vnđ
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Salary;
