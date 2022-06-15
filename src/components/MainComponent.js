import React, { Component } from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

import DishDetail from "./DishDetail";
import Menu from "./Menu.js";
import { DISHES } from "../shared/dishes.js";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishList: DISHES,
      selectedDish: null,
    };
  }

  handleDishSelected(dishID) {
    this.setState({ selectedDish: dishID });
  }

  render() {
    return (
      <section className="container">
        <Menu
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
        />
      </section>
    );
  }
}

export default MainComponent;
