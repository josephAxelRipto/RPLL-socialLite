import React, { Component } from "react";
import { Form, Container, Row, Col, Button, center } from 'react-bootstrap';
import Logo from "../asset/logo.png";

class Register extends Component {
    render() {
        const style_hr = {
            marginTop: "50px"
        };
        const style_logo = {
            marginTop: "20px"
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
                        <h2 class="ml-5 mb-5 mt-5">Sign Up</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" class="mb-5">
                    <Col xs lg="6">
                        <Form>
                            <Form.Group controlId="formGroupFirstname">
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control type="text" autocomplete="off" />
                            </Form.Group>
                            <Form.Group controlId="formGroupLastname">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" autocomplete="off" />
                            </Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col} controlId="day">
                                    <Form.Label>Day</Form.Label>
                                    <Form.Control as="select" defaultValue="1">
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
                                    <Form.Control as="select" defaultValue="January">
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
                                    <Form.Control as="select" defaultValue="2015">
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Label>Gender</Form.Label>
                            <Form.Row className="justify-content-md-center">
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    id="male"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    id="female"
                                />
                            </Form.Row>
                            <Form.Group controlId="formGroupUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" autocomplete="off" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" autocomplete="off" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" autocomplete="off" />
                            </Form.Group>
                            <Form.Group controlId="formGroupConfirmPass">
                                <Form.Label>Confirmation Password</Form.Label>
                                <Form.Control type="password" autocomplete="off" />
                            </Form.Group>
                            <Button variant="secondary" type="submit" size="lg" block>
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row class="mt-5 md-5">
                    <Col class="mt-5">
                        <center><Button variant="link"><br /> &#60; Go Back </Button></center>
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
export default Register;