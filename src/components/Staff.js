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
      <div className="my-2">
        <Card>{this.props.staffObject.name}</Card>
      </div>
    );
  }
}

export default Staff;
