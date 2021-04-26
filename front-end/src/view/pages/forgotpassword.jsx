import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../asset/logo.png";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import ModalForgotPassword from "../components/modalForgotPassword";
import { URL_API } from "../utils/constant";
import swal from "sweetalert";

class forgotpassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      show: false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`${URL_API}api/CheckMemberByEmail?username=${this.state.username}&email=${this.state.email}`).then((res) => {
      this.setState({ show: true })
    }).catch((error) => {
      const errorMessage = JSON.parse(error.request.response)
      swal({
        title: "Gagal",
        text: "Gagal, " + errorMessage.message,
        icon: "error",
        button: false,
        timer: 2500,
      });
    });
  }

  handleClose = () => this.setState({ show: false })
  handleShow = () => this.setState({ show: true });

  render() {
    const style = {
      logo: {
        marginTop: "20px",
        width: "120px",
        height: "100px",
      },
      forgotpassword: {
        marginLeft: "30px",
        marginTop: "20px",
        marginBottom: "20px",
      },
      form: {
        marginTop: "50px",
      },
      goLogin: {
        marginTop: "50px",
        textDecoration: "none",
        fontSize: "18px"
      }
    };
    return (
      <Container>
        <Row>
          <Col>
            <img src={Logo} className="logo" style={style.logo} alt="Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2
              className="justify-content-md-between"
              style={style.forgotpassword}
            >
              Forgot Password
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={style.form}>
          <Col xs lg="6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupUsername">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                  required
                />
              </Form.Group>
              <Button variant="secondary" type="submit" size="lg" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={style.goLogin}>
          <Col xs lg="2">
            <Link to="/login">
              <Button variant="light" type="submit" size="lg">
                &#60; Back Login
              </Button>
            </Link>
          </Col>
        </Row>
        <ModalForgotPassword onHide={this.handleClose} show={this.state.show}/>
      </Container>
    );
  }
}
export default withRouter(forgotpassword);
