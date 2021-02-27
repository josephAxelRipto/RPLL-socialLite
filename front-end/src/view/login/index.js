import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from "./logo.png";

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} className="logo" alt="Logo" width="50px" height="50px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 class="ml-5 mb-5 mt-5">Log In</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="text" placeholder="Username" autocomplete="off" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" autocomplete="off" />
                            </Form.Group>
                            {/* <a href="#">Forgot Password</a> */}
                            <Button variant="secondary" type="submit" size="lg" block>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <hr />
                </Row>
            </Container>
        );
    }



}