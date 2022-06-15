import React from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import { DISHES } from "../shared/dishes.js";
import DishDetail from "./DishDetail";

class Menu extends Component {
  render() {
    let menu = this.props.dishList.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          {/* truyền dish id lại cho MainComponent qua hàm onClick của props */}
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return <section className="row">{menu}</section>;
  }
}

export default Menu;
