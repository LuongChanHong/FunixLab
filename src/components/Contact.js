import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (value) => value && value.length;
const maxLength = (length) => (value) => !value || value.length <= length;
const minLength = (length) => (value) => value && value.length >= length;
const isNumber = (value) => !isNaN(Number(value));
const validEmail = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(value);

class Contact extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   firstName: "",
    //   lastName: "",
    //   telNum: "",
    //   email: "",
    //   agree: "",
    //   contactType: "",
    //   message: "",
    //   touched: {
    //     firstName: false,
    //     lastName: false,
    //     email: false,
    //     telNum: false,
    //   },
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
  }

  // handleBlur = (field) => (event) => {
  //   this.setState({ touched: { ...this.state.touched, [field]: true } });
  // };

  // validation(firstName, lastName, email, telNum) {
  //   const errors = {
  //     firstName: "",
  //     lastName: "",
  //     telNum: "",
  //     email: "",
  //   };
  //   const regular = /^\d+$/; // tất cả kí tự trong string phải là số
  //   if (this.state.touched.firstName && firstName.length < 3) {
  //     errors.firstName = "first name should be >= 3 character";
  //   } else if (this.state.touched.firstName && firstName.length > 10) {
  //     errors.firstName = "first name should be <= 10 character";
  //   }

  //   if (this.state.touched.lastName && lastName.length < 3) {
  //     errors.lastName = "last name should be >= 3 character";
  //   } else if (this.state.touched.lastName && lastName.length > 10) {
  //     errors.lastName = "last name should be <= 10 character";
  //   }

  //   if (this.state.touched.telNum && !regular.test(telNum)) {
  //     errors.telNum = "tel number should contain only number";
  //   }

  //   if (
  //     this.state.touched.email &&
  //     email.split("").filter((item) => item === "@").length !== 1
  //   ) {
  //     errors.email = "email should contain a @";
  //   }

  //   return errors;
  // }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({ [name]: value });
  // }

  handleSubmit(value) {
    // console.log("State: ", JSON.stringify(value));
    console.log("State: ", value);
    alert("State: " + JSON.stringify(value));
    // alert("State: " + value);
  }

  render() {
    // const errors = this.validation(
    //   this.state.firstName,
    //   this.state.lastName,
    //   this.state.email,
    //   this.state.telNum
    // );

    return (
      <div className="container">
        <div className="row">
          {/* Component hiển thị đường dẫn trang */}
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
              {/* Input item */}
              <Row className="form-group">
                <Label md={2} htmlFor="firstName">
                  First name:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="first name"
                    className="form-control"
                    // REDUX FORM VALIDATION
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: " Must be greater than 2 character",
                      maxLength: " Must be 15 character or less",
                    }}
                  />
                </Col>
              </Row>
              {/* Input item */}
              <Row className="form-group">
                <Label md={2} htmlFor="lastName">
                  Last name:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="last name"
                    className="form-control"
                    // REDUX FORM VALIDATION
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: " Must be greater than 2 character",
                      maxLength: " Must be 15 character or less",
                    }}
                  />
                </Col>
              </Row>
              {/* Input item */}
              <Row className="form-group">
                <Label md={2} htmlFor="telNum">
                  Contact Tel:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telNum"
                    id="telNum"
                    name="telNum"
                    placeholder="Tel. Number"
                    className="form-control"
                    // REDUX FORM VALIDATION
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telNum"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: " Must be greater than 2 number",
                      maxLength: " Must be 15 number or less",
                      isNumber: " Must be a number",
                    }}
                  />
                </Col>
              </Row>
              {/* Input item */}
              <Row className="form-group">
                <Label md={2} htmlFor="email">
                  Email:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    // REDUX FORM VALIDATION
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: " Invalid email",
                    }}
                  />
                </Col>
              </Row>
              {/* Input item */}
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you ?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              {/* Input item */}
              <Row className="form-group">
                <Label md={2} htmlFor="message">
                  Feed back:
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    row={12}
                    className="form-control"
                  />
                </Col>
              </Row>
              {/* Input item */}
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
