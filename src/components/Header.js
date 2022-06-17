import React, { Component } from "react";
import {
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarOpen: false,
    };
    // Gán hàm toggleNavbar cho class Header để có thế sư dụng
    // cách khác là dùng arrow function
    // trỏ tới hàm toggleNavbar trong onClich thẻ cần dùng hàm này
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            {/* BUTTON */}
            <NavbarToggler onClick={this.toggleNavbar} />
            {/* LOGO */}
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="70"
                width="100"
                alt="logo"
              />
            </NavbarBrand>
            {/* NAVBAR */}
            <Collapse isOpen={this.state.isNavbarOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"> About us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"> Menu</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg">
                      {" "}
                      Contact us
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
