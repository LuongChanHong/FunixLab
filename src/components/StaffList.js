import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <h1>StaffList</h1>
        <Footer />
      </div>
    );
  }
}

export default StaffList;
