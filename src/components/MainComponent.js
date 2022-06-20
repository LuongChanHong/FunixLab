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
import DishDetail from "./DishDetail.js";

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

  render() {
    const DishWithId = ({ match }) => {
      // console.log("match:", match);
      // const list = window.location.href.split("/");
      // const id = list[list.length - 1];
      // console.log("id:", id);
      console.log("match.params:", match.params);

      return (
        <DishDetail
          dish={
            this.state.dishList.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={
            this.state.commentList.filter(
              (cmt) => cmt.dishId === parseInt(match.params.dishId, 10)
            )[0]
          }
        />
      );
    };

    const HomeCompWithProps = () => {
      return (
        <Home
          dish={this.state.dishList.filter((dish) => dish.featured == true)[0]}
          promotion={
            this.state.promotionList.filter(
              (promo) => promo.featured == true
            )[0]
          }
          leader={
            this.state.leaderList.filter((lead) => lead.featured == true)[0]
          }
        />
      );
    };

    return (
      <section className="container">
        <Header />
        <Routes>
          <Route exact path="/home" element={<HomeCompWithProps />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishList={this.state.dishList} />}
          />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="*" element={<HomeCompWithProps />} />
        </Routes>

        <Footer />
      </section>
    );
  }
}

export default MainComponent;
