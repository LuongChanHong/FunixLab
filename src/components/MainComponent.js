import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
import { Routes, Route, useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { action } from "react-redux-form";

import Menu from "./Menu.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
import DishDetail from "./DishDetail.js";

import {
  postCommentAction,
  fetchDishesAction,
  fetchPromosAction,
  fetchCommentListAction,
} from "../redux/ActionCreators";

// Redux
const mapStateToProps = (state) => {
  return {
    dishList: state.dishList,
    commentList: state.commentList,
    leaderList: state.leaderList,
    promotionList: state.promotionList,
  };
};

// Redux action
const mapDispatchToProps = (dispatch) => ({
  // Hàm gọi dispatch để tạo ra action bên trong dispatch
  postCommentMethod: (dishId, rating, author, comment) =>
    dispatch(postCommentAction(dishId, rating, author, comment)),
  // redux thunk
  fetchDishesMethod: () => {
    dispatch(fetchDishesAction());
  },
  fetchPromosMethod: () => {
    dispatch(fetchPromosAction());
  },
  fetchCommentListMethod: () => {
    dispatch(fetchCommentListAction());
  },
  // resetFeedBackForm: () => {
  //   dispatch(action.reset("feedback"));
  // },
});

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // gọi fetchDishesAction để lấy dish list và dispath vào redux store
    this.props.fetchDishesMethod();
    this.props.fetchCommentListMethod();
    this.props.fetchPromosMethod();
  }

  render() {
    const DishWithId = () => {
      let { dishId } = useParams();
      return (
        <DishDetail
          dish={this.props.dishList.dishes.find((dish) => dish.id == dishId)}
          comments={this.props.commentList.cmts.filter(
            (cmt) => cmt.dishId == dishId
          )}
          commentListErrMess={this.props.commentList.errmess}
          // Redux action
          postCommentMethod={this.props.postCommentMethod}
          // redux thunk
          isLoading={this.props.dishList.isLoading}
          errMess={this.props.dishList.errmess}
        />
      );
    };

    const HomeCompWithProps = () => {
      return (
        <Home
          dish={
            this.props.dishList.dishes.filter(
              (dish) => dish.featured == true
            )[0]
          }
          // redux thunk
          dishesLoading={this.props.dishList.isLoading}
          dishesErrMess={this.props.dishList.errmess}
          promotion={
            this.props.promotionList.promos.filter(
              (promo) => promo.featured == true
            )[0]
          }
          // redux thunk
          promosLoading={this.props.promotionList.isLoading}
          promosErrMess={this.props.promotionList.errmess}
          leader={
            this.props.leaderList.filter((lead) => lead.featured == true)[0]
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
            element={<Menu dishList={this.props.dishList} />}
          />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="*" element={<HomeCompWithProps />} />
        </Routes>

        <Footer />
      </section>
    );
  }
}

// Kết nối comp dùng redux với react router dom
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
