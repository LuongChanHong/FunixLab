import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "uthappizza",
          image: "assets/images/uthappizza.png",
          category: "main",
          label: "hot",
          price: "4",
          text: "uthappizza",
        },
        {
          id: 1,
          name: "vadonut",
          image: "assets/images/vadonut.png",
          category: "main",
          label: "hot",
          price: "4",
          text: "vadonut",
        },
        {
          id: 2,
          name: "elaicheesecake",
          image: "assets/images/elaicheesecake.png",
          category: "main",
          label: "hot",
          price: "4",
          text: "elaicheesecake",
        },
      ],
    };
  }

  render() {
    let menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 my-3">
          <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name}></Media>
            </Media>
            <Media body className="">
              <Media heading>{dish.name}</Media>
              <p>{dish.text}</p>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <section className="container">
        <div className="row">
          <Media list>{menu}</Media>
        </div>
      </section>
    );
  }
}

export default Menu;
