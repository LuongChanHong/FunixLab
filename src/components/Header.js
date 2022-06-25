import React, { Component } from "react";
import {
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarOpen: false,
      isModalOpen: false,
    };
    // Gán hàm toggleNavbar cho class Header để có thế sư dụng
    // cách khác là dùng arrow function
    // trỏ tới hàm toggleNavbar trong onClich thẻ cần dùng hàm này
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "username:" +
        this.userName.value +
        " password:" +
        this.passWord.value +
        " remember:" +
        this.remember.checked
    );
    event.preventDefault();
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
              {/* Login modal button */}
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span>login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          {/* UNCONTROLED FORM */}
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="userName">Username:</Label>
                <Input
                  type="text"
                  id="userName"
                  name="userName"
                  innerRef={(input) => {
                    this.userName = input;
                  }} // uncontrolled spot light
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="passWord">Password:</Label>
                <Input
                  type="password"
                  id="passWord"
                  name="passWord"
                  innerRef={(input) => {
                    this.passWord = input;
                  }} // uncontrolled spot light
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => {
                      this.remember = input;
                    }} // uncontrolled spot light
                  />{" "}
                  Remeber me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
