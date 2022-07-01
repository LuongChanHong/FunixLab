// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./components/Main";
import { ConfigureStore } from "./redux/configureStore";

// Redux
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      // Redux
      <Provider store={store}>
        {/* React Router */}
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
