import React, { Component } from "react";
import { Form, Container, Row, Col, Button, center } from "react-bootstrap";
import Logo from "../asset/logo.png";
import axios from "axios";
import swal from "sweetalert";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      gender: "",
      username: "",
      password: "",
      day: "",
      month: "",
      year: "",
      confirmPass: "",
      dateJoin: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
      const dataUser = {
        fullname: this.state.firstname + " " + this.state.lastname,
        birth: this.state.day + "-" + this.state.month + "-" + this.state.year,
        username: this.state.username,
        password: this.state.password,
      };

      axios
        .post("http::/localhost:8080/api/SignUp" + dataUser)
        .then((res) => {
          swal({
            title: "Sukses Sign Up",
            text: "Sukses Sign Up " + dataUser.username,
            icon: "success",
            button: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log("Error yaa ", error);
          console.log("dataUser", dataUser)
          swal({
            title: "Gagal Sign Up",
            text: "Gagal Sign Up ",
            icon: "warning",
            button: false,
            timer: 1500,
          });
        });

    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      day: "1",
      month: "Mei",
      year: "2000",
      confirmPass: "",
      dateJoin: "",
    });
  };

  render() {
    console.log(this.state.data);
    const style_hr = {
      marginTop: "50px",
    };
    const style_logo = {
      marginTop: "20px",
    };
    return (
      <Container>
        <Row>
          <Col>
            <img
              src={Logo}
              className="logo"
              style={style_logo}
              alt="Logo"
              width="50px"
              height="50px"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 class="ml-5 mb-5 mt-5">Sign Up</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center" class="mb-5">
          <Col xs lg="6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupFirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Group controlId="formGroupLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="day">
                  <Form.Label>Day</Form.Label>
                  <Form.Control
                    as="select"
                    name="day"
                    value={this.state.day}
                    onChange={(event) => this.handleChange(event)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="month">
                  <Form.Label>Month</Form.Label>
                  <Form.Control
                    as="select"
                    name="month"
                    value={this.state.month}
                    onChange={(event) => this.handleChange(event)}
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="year">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    as="select"
                    name="year"
                    value={this.state.year}
                    onChange={(event) => this.handleChange(event)}
                  >
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Label>Gender</Form.Label>
              <Form.Row className="justify-content-md-center">
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  id="male"
                  onChange={(event) => this.handleChange(event)}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  id="female"
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Row>
              <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Group controlId="formGroupConfirmPass">
                <Form.Label>Confirmation Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPass"
                  value={this.state.confirmPass}
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Button variant="secondary" type="submit" size="lg" block>
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
        <Row class="mt-5 md-5">
          <Col class="mt-5">
            <center>
              <Button variant="link">
                <br /> &#60; Go Back{" "}
              </Button>
            </center>
          </Col>
        </Row>
        <footer>
          <Row>
            <Col xs lg="12">
              <hr style={style_hr} />
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}
export default Register;
