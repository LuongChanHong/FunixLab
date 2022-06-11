// import logo from "./logo.svg";
// import "./App.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Menu from "./components/Menu";
import { DISHES } from "./shared/dishes.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="">
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
