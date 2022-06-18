import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
import { Routes, Navigate, Route } from "react-router-dom";

import { DISHES } from "../shared/dishes.js";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import Menu from "./Menu.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import Home from "./Home.js";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedDish: null,
      dishList: DISHES,
      commentList: COMMENTS,
      leaderList: LEADERS,
      promotionList: PROMOTIONS,
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
          <Route
            exact
            path="/home"
            element={
              <Home
                dish={this.state.dishList.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotionList.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.state.leaderList.filter((lead) => lead.featured)[0]
                }
              />
            }
          />
          <Route exact path="/contactus" element={<Contact />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishList={this.state.dishList} />}
          />
          <Route path="*" element={<Home />} />
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
