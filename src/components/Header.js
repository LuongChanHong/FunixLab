import React, { Component } from "react";
import { NavbarBrand, Navbar, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Menu Header</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Menu Header Jumbotron</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus nam quis vero dolores quia, officia impedit
                  explicabo labore sed ullam! Nihil ea quia a quos possimus
                  exercitationem dolorum nesciunt eius?
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
