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

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComment(dishItem) {
    let comments = dishItem.comments.map((cmt) => {
      return (
        <div key={cmt.id} className="my-2">
          <Card>
            <CardBody>
              <CardTitle className="text-danger">{cmt.author}</CardTitle>
              <CardText>{cmt.comment}</CardText>
              {/* <CardText className="text-danger">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                }).format(new Date(Date.parse(cmt.date)))}
              </CardText> */}
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
    return comments;
  }

  render() {
    let dish = this.props.selectedDish;

    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">{this.renderComment(dish)}</div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default DishDetail;
