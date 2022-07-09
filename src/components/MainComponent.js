import React, { Component, useEffect } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";
import {
  Routes,
  Route,
  useParams,
  useLocation,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

const MainComponent = (props) => {
  const location = useLocation();
  useEffect(() => {
    // gọi fetchDishesAction để lấy dish list và dispath vào redux store
    props.fetchDishesMethod();
    props.fetchCommentListMethod();
    props.fetchPromosMethod();
  }, []);

  const DishWithId = () => {
    let { dishId } = useParams();
    return (
      <DishDetail
        dish={props.dishList.dishes.find((dish) => dish.id == dishId)}
        comments={props.commentList.cmts.filter((cmt) => cmt.dishId == dishId)}
        commentListErrMess={props.commentList.errmess}
        // Redux action
        postCommentMethod={props.postCommentMethod}
        // redux thunk
        isLoading={props.dishList.isLoading}
        errMess={props.dishList.errmess}
      />
    );
  };

  const HomeCompWithProps = () => {
    return (
      <Home
        dish={props.dishList.dishes.filter((dish) => dish.featured == true)[0]}
        // redux thunk
        dishesLoading={props.dishList.isLoading}
        dishesErrMess={props.dishList.errmess}
        promotion={
          props.promotionList.promos.filter(
            (promo) => promo.featured == true
          )[0]
        }
        // redux thunk
        promosLoading={props.promotionList.isLoading}
        promosErrMess={props.promotionList.errmess}
        leader={props.leaderList.filter((lead) => lead.featured == true)[0]}
      />
    );
  };

  return (
    <section className="container">
      <Header />
      {/* React transition group */}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes>
            <Route exact path="/home" element={<HomeCompWithProps />} />
            <Route exact path="/contactus" element={<Contact />} />
            <Route
              exact
              path="/menu"
              element={<Menu dishList={props.dishList} />}
            />
            <Route path="/menu/:dishId" element={<DishWithId />} />
            <Route path="*" element={<HomeCompWithProps />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </section>
  );
};

// Kết nối comp dùng redux với react router dom
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
