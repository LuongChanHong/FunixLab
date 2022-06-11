import "../style/style.css";
import React, { Component } from "react";

import { Card } from "reactstrap";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 my-1">
        <Card>{this.props.staffObject.name}</Card>
      </div>
    );
  }
}

export default Staff;
