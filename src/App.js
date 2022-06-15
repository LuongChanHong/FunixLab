// import logo from "./logo.svg";
// import "./App.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

// import Menu from "./components/Menu";
import MainComponent from "./components/MainComponent.js";
import { DISHES } from "./shared/dishes.js";

class App extends Component {
  render() {
    return (
      <div className="">
        <MainComponent />
      </div>
    );
  }
}

export default App;
