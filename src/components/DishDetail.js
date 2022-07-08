import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control } from "react-redux-form";

import LoadingSpinner from "./LoadingSpinner.js";
import { baseUrl } from "../shared/baseUrl.js";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  // Redux action
  handleSubmitComment = (value) => {
    this.props.addCommentMethod(
      this.props.dishId,
      value.rating,
      value.author,
      value.comment
    );
    this.toggleModal();
  };

  render() {
    return (
      <section>
        <Button onClick={this.toggleModal} color="warning">
          comment
        </Button>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.handleSubmitComment(value)}>
              <Row className="form-group mb-2">
                {/* ITEM */}
                <Label md={4} htmlFor="author">
                  Author:{" "}
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".author"
                    id="author"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group mb-2">
                {/* ITEM */}
                <Label md={4} htmlFor="rating">
                  Rating:{" "}
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    className="form-control"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group mb-2">
                {/* ITEM */}
                <Label md={4} htmlFor="comment">
                  Comment:{" "}
                </Label>
                <Col md={8}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group mb-2">
                {/* ITEM */}
                <div className="d-flex justify-content-end">
                  <Button type="submit">comment</Button>
                </div>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </section>
    );
  }
}

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
      <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

const DishDetail = (props) => {
  let selectedDish = props.dish;
  if (props.isLoading) {
    return <LoadingSpinner />;
  } else if (props.errmess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errmess}</h4>
        </div>
      </div>
    );
  } else if (selectedDish != null) {
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
            <CommentForm
              addComment={props.addComment}
              dishId={selectedDish.id}
            />
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
