import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText } from "reactstrap";

import Header from "./Header";
import Footer from "./Footer";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStaffList = () => {
    const list = this.props.staffList;
    return list.map((staff) => (
      <div key={staff.id} className="col-sm-6 col-md-4 col-lg-2 my-1">
        <Card>
          <CardImg src="assets/images/alberto.png" alt="avatar-img" />
          <CardBody>
            <CardText className="text-center">{staff.name}</CardText>
          </CardBody>
        </Card>
      </div>
    ));
  };

  render() {
    // console.log(this.props.staffList);
    return (
      <section className="component_bg">
        <Header />
        <div className="container">
          <h1>Nhân viên</h1>
          <hr />
          <div className="row">{this.renderStaffList()}</div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default StaffList;
