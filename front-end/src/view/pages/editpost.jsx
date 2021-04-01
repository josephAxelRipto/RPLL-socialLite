import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";

import Profile from "../asset/model1.jpeg";
import Post from "../asset/model1.jpeg";


class EditPost extends Component {
    render() {
        const style = {
            logo: {
                marginTop: "20px",
                width: "120px",
                height: "100px",
            },
            judul: {
                marginTop: "70px",
                marginLeft: "-90px"
            },
            hr: {
                border: "1px solid",
            },
            body: {
                marginTop: "90px"
            },
            profile: {
                borderRadius: "70px",
                width: "40px",
                height: "40px",
                marginRight: "40px"
            },
            columnKanan: {
                marginTop: "50px",
                marginLeft: "40px"
            },
            uploadButton: {
                width: "200px",
                marginTop: "40px"
            },
            buttonGoBack: {
                marginTop: "350px",
                marginLeft: "40px"
            },
            iconUpload: {
                width: "40px",
                height: "40px",
                marginBottom: "10px",
                marginLeft: "15px"
            },
            text: {
                marginTop: "5px",
                marginLeft: "5px"
            },
            imagePost: {
                width: "520px",
                
            }

        };
        return (
            <Container>
                <Row>
                    <Col>
                        <Link to="/">
                            <img src={Logo} className="logo" style={style.logo} alt="Logo" />
                        </Link>
                    </Col>
                    <Col>
                        <b><h2 style={style.judul}>Edit Post</h2></b>
                    </Col>
                </Row>
                <hr style={style.hr} />
                <Row style={style.body}>
                    <Col>
                        <h3>EDIT YOUR POST</h3>
                        <Link to="/">
                            <Button
                                variant="light"
                                type="submit"
                                size="lg"
                                style={style.buttonGoBack}
                            >
                                &#60; Go Home
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <img src={Post} alt ="post" style={style.imagePost}></img>
                    </Col>
                    <Col>
                        <Row>
                            <img src={Profile} alt="profile" style={style.profile}>
                            </img>
                            <Form>
                                <Form.Control
                                    name="caption"
                                    as="textarea"
                                    rows={3}
                                    placeholder="Write Caption"
                                    required
                                />
                                <hr style={style.hr} />
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    size="lg"
                                    style={style.uploadButton}
                                    block
                                    rounded
                                >
                                    Save Changes
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default EditPost;