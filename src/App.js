// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import MainComponent from "./components/MainComponent.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
