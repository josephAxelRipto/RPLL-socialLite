import React, { Component } from "react";
import { Form, Container, Row, Col, Button, center } from "react-bootstrap";
import Logo from "../asset/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      data: [
        ...this.state.data,
        {
          username: this.state.username,
          password: this.state.password,
        },
      ],
    });
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    const style_hr = {
      marginTop: "130px",
    };
    const style_logo = {
      marginTop: "20px",
    };
    const style_goBack = {
      marginTop: "50px",
      textDecoration: "none",
      color: "black",
    };
    const style_text_login = {
      marginLeft: "50px",
      marginBottom: "30px",
      marginTop: "30px",
      font: "bebas-neueu",
    };
    const style_form = {
      marginTop: "50px",
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
            <h2 style={style_text_login}>Log In</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={style_form}>
          <Col xs lg="6">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupUsername">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                />
                <Button variant="link">
                  <br /> Forgot Password? |{" "}
                </Button>
              </Form.Group>
              <Button variant="secondary" type="submit" size="lg" block>
                Log In
              </Button>
            </Form>
          </Col>
        </Row>
        <Row style={style_goBack}>
          <Col>
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
          <Row>
            <Col>
              <center>
                Don't have an account? <Button variant="link"> Sign Up </Button>{" "}
              </center>
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}
export default Login;
