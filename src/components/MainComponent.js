import React, { Component } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
import { Routes, Route, useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./Menu.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
import DishDetail from "./DishDetail.js";

import { addCommentAction } from "../redux/ActionCreators";

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
  addCommentMethod: (dishId, rating, author, comment) =>
    dispatch(addCommentAction(dishId, rating, author, comment)),
});

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const DishWithId = () => {
      let { dishId } = useParams();
      return (
        <DishDetail
          dish={this.props.dishList.find((dish) => dish.id == dishId)}
          comments={this.props.commentList.filter(
            (cmt) => cmt.dishId == dishId
          )}
          // Redux action
          addCommentMethod={this.props.addCommentMethod}
        />
      );
    };

    const HomeCompWithProps = () => {
      return (
        <Home
          dish={this.props.dishList.filter((dish) => dish.featured == true)[0]}
          promotion={
            this.props.promotionList.filter(
              (promo) => promo.featured == true
            )[0]
          }
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
