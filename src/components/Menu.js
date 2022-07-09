import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner.js";
import { baseUrl } from "../shared/baseUrl.js";

function RenderMenuItem({ dish }) {
  /* truyền dish id lại cho MainComponent qua hàm onClick của props */
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  let menu = props.dishList.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-6 col-md-3 my-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  if (props.dishList.isLoading) {
    return <LoadingSpinner />;
  } else if (props.dishList.errmess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishList.errmess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <section className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>

        <div className="row">{menu}</div>
      </section>
    );
  }
};

export default Menu;
