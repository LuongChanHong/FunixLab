import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
import { Routes, Navigate, Route } from "react-router-dom";

import { DISHES } from "../shared/dishes.js";

import DishDetail from "./DishDetail";
import Menu from "./Menu.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishList: DISHES,
      // selectedDish: null,
    };
  }

  // handleDishSelected(dishID) {
  //   this.setState({ selectedDish: dishID });
  // }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <section className="container">
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishList={this.state.dishList} />}
          />
        </Routes>
        {/* <Menu
          dishList={this.state.dishList}
          // Nhận dish id truyền về từ <Menu>
          onClick={(dishId) => this.handleDishSelected(dishId)}
        />
        <DishDetail
          selectedDish={
            this.state.dishList.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}
        <Footer />
      </section>
    );
  }
}

export default MainComponent;
