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
// import { DISHES } from "../shared/dishes.js";
// import DishDetail from "./DishDetail";

function RenderMenuItem({ dish, onClick }) {
  /* truyền dish id lại cho MainComponent qua hàm onClick của props */
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" object src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
  let menu = props.dishList.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return <section className="row">{menu}</section>;
};

export default Menu;
