import React, { Component } from "react";
import { Form, Container, Row, Col, Button, center } from "react-bootstrap";
import Logo from "../asset/logo.png";
import { Link } from "react-router-dom";

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
    const style = {
      hr: {
        marginTop: "80px",
      },
      logo: {
        marginTop: "20px",
        width: "120px",
        height: "100px",
      },
      goHome: {
        marginTop: "50px",
        textDecoration: "none",
        fontSize: "18px"
      },
      form: {
        marginTop: "50px",
      },
      login: {
        marginLeft: "30px",
        marginTop: "20px",
        marginBottom: "20px",
      }
    };
    return (
      <Container>
        <Row>
          <Col>
            <img
              src={Logo}
              className="logo"
              style={style.logo}
              alt="Logo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="justify-content-md-between" style={style.login}>Log In</h2>
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
                  autoComplete= "off" required
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                  required
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
        <Row className="justify-content-md-center" style={style.goHome}>
          <Col xs lg="2">
            <Link to="/home">
              <Button
                variant="light"
                type="submit"
                size="lg"
              >
                &#60; Go Home
              </Button>
            </Link>
          </Col>
        </Row>
        <footer>
          <Row>
            <Col xs lg="12">
              <hr style={style.hr} />
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
                Don't have an account? <a href="/signup">sign up</a>
              </center>
            </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}
export default Login;
