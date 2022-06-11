import "../style/style.css";
import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="menuBody">
        <h2 className="p-3">Personnel management app v1.0</h2>
      </section>
    );
  }
}

export default Menu;
