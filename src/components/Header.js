import React, { Component } from "react";

import {
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isNavbarOpen: false };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img
              src="assets/images/logo.png"
              height="70"
              width="100"
              alt="logo"
            />
          </NavbarBrand>
          <NavbarToggler
            onClick={() =>
              this.setState({ isNavbarOpen: !this.state.isNavbarOpen })
            }
          ></NavbarToggler>
          <Collapse
            isOpen={this.state.isNavbarOpen}
            navbar
            className="justify-content-end"
          >
            <Nav navbar>
              {/* link đến trang nhân viên */}
              <NavItem>
                <NavLink className="nav-link" to="/staff">
                  <span className="">Nhân viên</span>
                </NavLink>
              </NavItem>
              {/* link đến trang phòng ban */}
              <NavItem>
                <NavLink className="nav-link" to="/department">
                  <span className="">Phòng ban</span>
                </NavLink>
              </NavItem>
              {/* link đến trang bảng lương */}
              <NavItem>
                <NavLink className="nav-link" to="/salary">
                  <span className="">Bảng lương</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
