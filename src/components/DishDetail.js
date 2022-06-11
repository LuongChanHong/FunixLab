import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComment(dish) {
    console.log(dish);
    console.log("dish.comments:", dish.comments);
    let dishComment = dish.comments.map((item) => {
      return (
        <div key={item.id}>
          <Card className="my-2 p-2">
            <CardTitle>{item.author}</CardTitle>
            <hr className="m-0"></hr>
            <CardText>{item.comment}</CardText>
            <p className="m-0">rating: {item.rating} ❤</p>
          </Card>
        </div>
      );
    });
    return dishComment;
  }

  render() {
    let selectedDish = this.props.selectedDish;

    // Trường hợp đã có 1 dish được clich
    return selectedDish != null ? (
      <section className="row">
        {/* Phần hình ảnh của dish */}
        <div className="col-12 col-md-5 m-1">
          <h4>Seclected dish</h4>

          {/* Dùng function renderDish truyền từ parent component*/}
          {this.props.renderDish(selectedDish)}
        </div>

        {/* Phần comment */}
        <div className="col-12 col-md-5 m-1">
          <h4>commnet</h4>
          {this.renderComment(selectedDish)}
        </div>
      </section>
    ) : (
      // Trường hợp chưa có dish được clich
      <></>
    );
  }
}

export default DishDetail;
