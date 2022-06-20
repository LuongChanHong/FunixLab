import React, { Component } from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function renderComment(comments) {
  return comments?.map((cmt) => {
    return (
      <div key={cmt.id} className="my-2">
        <Card>
          <CardBody>
            <CardTitle className="text-danger">{cmt.author}</CardTitle>
            <CardText>{cmt.comment}</CardText>
            <CardText className="text-danger">
              {new Intl.DateTimeFormat("en-US").format(
                new Date(Date.parse(cmt.date))
              )}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
}

function renderDishDetail(dish) {
  return (
    <Card>
      <CardImg width="100%" src={`${dish.image}`} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

const DishDetail = (props) => {
  let selectedDish = props.dish;
  if (selectedDish != null) {
    return (
      <section className="container">
        <div className="row">
          {/* Component hiển thị đường dẫn trang */}
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{selectedDish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {renderDishDetail(selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {renderComment(props.comments)}
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default DishDetail;
