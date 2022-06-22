import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import Header from "./Header";
import Footer from "./Footer";

const renderDepartments = (list) => {
  // let list = props.departments;
  return list.map((item) => (
    <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 my-2">
      <Card>
        <CardBody>
          <CardTitle>Phòng {item.name}</CardTitle>
          <CardText>Số nhân viên: {item.numberOfStaff}</CardText>
        </CardBody>
      </Card>
    </div>
  ));
};

function Departments(props) {
  return (
    <section className="component_bg">
      <Header />
      <div className="container component_bg">
        <h1>Phòng ban</h1>
        <hr />
        <div className="row">{renderDepartments(props.departments)}</div>
      </div>
      <Footer />
    </section>
  );
}

export default Departments;
