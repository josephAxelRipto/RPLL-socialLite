import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Switch } from "react-router-dom";
import Photo1 from "../asset/model1.jpeg";
import NavbarComponent from "../components/navbarComponent";

class ChangePassword extends Component {
  render() {
    const style_hr = {
      marginTop: "40px",
      marginLeft : "300px"
    };
    const submit_button = {
      width: "250px",
      marginLeft: "100px",
      marginTop: "50px",
      borderRadius: "20px",
    };
    const h2 = {
      marginTop : "150px",
      marginLeft : "100px"

    }
    
    const form_username = {
      marginTop: "27px",
    };
    return (
      <main>
        <Switch>
        <NavbarComponent/>
        </Switch>
          <Container>
            <Row className="justify-content-md-center" class="mb-5">
              <Col xs lg="6">
              <Row>
              <Col>
                <h2 style = {h2}>Change Password</h2>
              </Col>
            </Row>
                <Form>
                  
                  <Form.Group
                    as={Row}
                    controlId="formHorizontalEmail"
                    style={form_username}
                  >
                    <Form.Label column sm={5}>
                      <b>Old Password</b>
                    </Form.Label>
                    <Col sm={14}>
                      <Form.Control type="password"/>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    controlId="formHorizontalEmail"
                    style={form_username}
                  >
                    <Form.Label column sm={5}>
                      <b>New Password</b>
                    </Form.Label>
                    <Col sm={14}>
                      <Form.Control type="password"/>
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    controlId="formHorizontalEmail"
                    style={form_username}
                  >
                    <Form.Label column sm={5}>
                      <b>Retype New Password</b>
                    </Form.Label>
                    <Col sm={14}>
                      <Form.Control type="password"/>
                    </Col>
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    style={submit_button}
                    block
                    rounded
                  >
                    Change Password
                  </Button>
                </Form>
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
      </main>
    );
  }
}
export default ChangePassword;