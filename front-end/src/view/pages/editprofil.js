import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from "../asset/logo.png";
import Photo1 from "../asset/model1.jpeg";

class Editprofil extends Component {
    render() {
        const style_hr = {
            marginTop: "50px"
        };
        const style_logo = {
            marginTop: "20px"
        };
        const submit_button = {
            width: "440px",
            marginLeft: "100px",
            marginTop: "50px",
            borderRadius: "20px"
        }
        const form_name = {
            width: "550px",
            marginTop: "40px"
        }
        const form_bio = {
            marginTop: "27px"
        }
        const form_username = {
            marginTop: "27px"
        }
        const form_email = {
            marginTop: "27px"
        }
        const form_phone = {
            marginTop: "27px"
        }
        const style_photo = {
            // marginLeft: "380px",
            // display : "flex",
            width: "150px",
            height: "150px",
            borderRadius: "70px"
        }
        const user_name = {
            marginTop: "50px"
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} className="logo" style={style_logo} alt="Logo" width="120px" height="100px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 class="ml-5 mb-5 mt-5">Edit Profil</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" class="mb-5">
                    <Col md={{ span: 3, offset: 3 }}>
                        <img src={Photo1} className="Photo1" style={style_photo} alt="Photo1" />
                    </Col>
                    <Col>
                        <h3 style={user_name}> JAMES CARDIN </h3>
                        <Button variant="link">
                            Change Photo Profile{" "}
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" class="mb-5">
                    <Col xs lg="6">
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail" style={form_name}>
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="James Cardin" />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Your password must be 8-20 characters long, contain letters and numbers, and
                                        must not contain spaces, special characters, or emoji.
                                    </Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail" style={form_username}>
                                <Form.Label column sm={2}>
                                    Username
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="James_Cardin_1" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail" style={form_bio}>
                                <Form.Label column sm={2}>
                                    Bio
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows={3} placeholder="Kucinta dia tapi..."></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" style={form_email} placeholder="james@gmail.com" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Phone
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" style={form_phone} placeholder="08123456789" />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit" size="lg" style={submit_button} block rounded>
                                Submit
                                </Button>
                        </Form>
                    </Col>
                </Row>
                <footer>
                    <Row>
                        <Col xs lg="12" >
                            <hr style={style_hr} />
                        </Col>
                    </Row>
                </footer>
            </Container>
        );
    }

}
export default Editprofil;