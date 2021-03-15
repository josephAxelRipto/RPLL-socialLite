import React, { Component } from "react";
import { Form, Container, Row, Col, Button, center } from "react-bootstrap";
import Logo from "../asset/logo.png";
import axios from "axios";
import swal from "sweetalert";
import { URL_API } from "../utils/constant.js";

class Register extends Component {
  constructor(props) {
    super(props);

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      data: [],
      firstname: "",
      lastname: "",
      gender: "",
      username: "",
      password: "",
      phone_number: "",
      email: "",
      bio: "",
      day: 1,
      month: 5,
      year: 2000,
      confirmPass: "",
      dateJoin: date,
    };
  }

  componentDidMount() {
    axios.get(URL_API + "api/GetUsers").then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // const { data } = this.state;
    // let count = 0;

    // data && data.map((datas) => count++);

    if (this.state.password === this.state.confirmPass) {
      const dataUser = {
        fullname: this.state.firstname + " " + this.state.lastname,
        birth: this.state.year + "-" + this.state.month + "-" + this.state.day,
        gender: this.state.gender,
        email: this.state.email,
        bio: this.state.bio,
        phone_number: this.state.phone_number,
        username: this.state.username,
        password: this.state.password,
        member_join_date: this.state.dateJoin,
      };

      axios
        .post(URL_API + "api/SignUp", dataUser)
        .then((res) => {
          swal({
            title: "Sukses Sign Up",
            text: "Sukses Sign Up " + this.state.username,
            icon: "success",
            button: false,
            timer: 1500,
          });
          this.props.history.push("/home");
        })
        .catch((error) => {
          console.log("Error yaa ", error);
          console.log("dataUser", dataUser);
          swal({
            title: "Gagal Sign Up",
            text: "Gagal Sign Up ",
            icon: "warning",
            button: false,
            timer: 1500,
          });
          this.props.history.push("/signup");
        });
    } else {
      swal({
        title: "Gagal Sign Up",
        text: "Gagal Sign Up Masukan password dengan benar",
        icon: "warning",
        button: false,
        timer: 1500,
      });
      this.props.history.push("/signup");
    }

    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      phone_number: "",
      day: "1",
      month: "05",
      year: "2000",
      confirmPass: "",
      dateJoin: "",
    });
  };

  createDay = () => {
    let day = [];
    for (let index = 1; index <= 31; index++) {
      day.push(<option>{index}</option>);
    }
    return day;
  };

  createMonth = () => {
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let showMonth = [];
    for (let index = 0; index < 12; index++) {
      showMonth.push(<option value={index+1}>{month[index]}</option>);
    }
    return showMonth;
  };

  createYear = () => {
    let year = [];
    for (let index = 1980; index <= 2010; index++) {
      year.push(<option>{index}</option>);
    }
    return year;
  };

  render() {
    const style = {
      hr: {
        marginTop: "50px",
        height: "50px",
      },
      logo: {
        marginTop: "20px",
        width: "120px",
        height: "100px",
      },
      radio_button: {
        marginRight: "20px",
      },
      href_goHome: {
        marginTop: "50px",
        fontSize: "18px",
        textDecoration: "underline black",
      },
      judul_SignUp: {
        marginTop: "20px",
        marginBottom: "20px",
      },
    };
    return (
      <Container>
        <Row>
          <Col>
            <img src={Logo} style={style.logo} alt="Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2
              className="justify-content-md-between"
              style={style.judul_SignUp}
            >
              Sign Up
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupFirstname">
                <Form.Label>
                  <b>Firstname</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupLastname">
                <Form.Label>
                  <b>Lastname</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Label>
                <b>Date of Birth</b>
              </Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="day">
                  <Form.Label>
                    <b>Day</b>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="day"
                    value={this.state.day}
                    onChange={(event) => this.handleChange(event)}
                  >
                    {this.createDay()}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="month">
                  <Form.Label>
                    <b>Month</b>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="month"
                    value={this.state.month}
                    onChange={(event) => this.handleChange(event)}
                  >
                    {this.createMonth()}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="year">
                  <Form.Label>
                    <b>Year</b>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="year"
                    value={this.state.year}
                    onChange={(event) => this.handleChange(event)}
                  >
                    {this.createYear()}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Label>
                <b>Gender</b>
              </Form.Label>
              <Form.Row className="justify-content-md-center">
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  id="male"
                  onChange={(event) => this.handleChange(event)}
                  style={style.radio_button}
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
                <Form.Label>
                  <b>Username</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>
                  <b>Email</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupPhoneNumber">
                <Form.Label>
                  <b>Phone Number</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone_number"
                  value={this.state.phone_number}
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupConfirmPass">
                <Form.Label>
                  <b>Confirmation Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPass"
                  value={this.state.confirmPass}
                  onChange={(event) => this.handleChange(event)}
                  required
                />
              </Form.Group>
              <Button variant="secondary" type="submit" size="lg" block>
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
        <Row style={style.href_goHome}>
          <Col>
            <center>
              <a href="/home">&#60; Go Home</a>
            </center>
          </Col>
        </Row>
		<Row style={style.href_goHome}>
          <Col>
            <center>
              <a href="/login">&#60; Back to Login</a>
            </center>
          </Col>
        </Row>
        <Row>
          <Col xs lg="12">
            <hr style={style.hr} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Register;
