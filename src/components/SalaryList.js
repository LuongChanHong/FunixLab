import React from "react";
import { Card, CardBody, CardText, CardFooter, CardHeader } from "reactstrap";

import Header from "./Header";
import Footer from "./Footer";

const renderSaraly = (list) => {
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
        <CardFooter>Lương: </CardFooter>
      </Card>
    </div>
  ));
};

function SalaryList(props) {
  return (
    <section className="component_bg">
      <Header />
      <div className="container">
        <h1>Bảng lương</h1>
        <hr />
        <div className="row">{renderSaraly(props.staffList)}</div>
      </div>
      <Footer />
    </section>
  );
}

export default SalaryList;
