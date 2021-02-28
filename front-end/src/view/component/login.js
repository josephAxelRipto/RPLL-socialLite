import React, { Component } from "react";
import { Form, Container, Row, Col, Button, center } from 'react-bootstrap';
import Logo from "../asset/logo.png";

class Login extends Component {
    render() {
        const style_hr = {
            marginTop:"50px"
        };
        const style_logo = {
            marginTop:"20px"
        };
        return (
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} className="logo" style={style_logo} alt="Logo" width="50px" height="50px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 class="ml-5 mb-5 mt-5">Log In</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" class="mb-5">
                    <Col xs lg="6">
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control type="text" placeholder="Username" autocomplete="off" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" autocomplete="off" />
                                {/* <a href={"#"}>Forgot Password? |</a> */}
                            </Form.Group>
                            <Button variant="secondary" type="submit" size="lg" block>
                                Log In
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row class="mt-5 md-5">
                    <Col class="mt-5">
                    <center><Button variant="link"><br /> &#60; Go Back </Button></center>
                    </Col>
                </Row>
                <footer class="mt-5">
                    <Row>
                        <Col xs lg="12" >
                            <hr style={style_hr} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <center>Don't have an account? <Button variant="link"> Sign Up </Button> </center>
                        </Col>
                    </Row>
                </footer>
            </Container>
        );
    }

}
export default Login;