import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import NavbarComponent from "../components/navbarComponent";

import Model1 from "../asset/model1.jpeg";
import Model2 from "../asset/model2.jpg";
import Model3 from "../asset/model3.jpg";
import Photo1 from "../asset/model1.jpeg";

import AddStory from "../asset/add_circle-24px.svg";

class Profile extends Component {
    render (){
        const style = {
            column_kiri: {
              marginTop: "150px",
              fixed:"top"
            },
            tulisanSocialStory: {
              marginLeft: "15px",
              marginTop: "50px",
            },
            storyIcon: {
              borderRadius: "55px",
              width: "50px",
              height: "50px",
              marginTop: "10px",
            },
            textStory: {
              marginTop: "30px",
              marginLeft: "12px",
            },
            column_tengah: {
              marginTop: "150px",
              width: "3000px",
            },
            column_kanan: {
              marginTop: "150px",
              marginLeft: "80px",
            },
            icon: {
              borderRadius: "55px",
              width: "90px",
              height: "90px",
            },
            
          };
        return (
            <main>
                <Switch>
                    <NavbarComponent />
                </Switch>
                <Container>
                  <Row>
                    <Col xs={{ order: "first" }} style={style.column_kiri}>
                      
                      <Row style={style.tulisanSocialStory}>
                        <p className="text-muted">SOCIAL STORY</p>
                      </Row>

                      {/* disini buat masukin story */}
                      <Row>
                        <Button variant="outline-light">
                          <img
                            src={Model1}
                            href="#"
                            alt="story"
                            style={style.storyIcon}
                          ></img>
                        </Button>
                        <p style={style.textStory}>Jane Lopinaz</p>
                      </Row>

                      {/* ini story baru lagi */}
                      <Row>
                        <Button variant="outline-light">
                          <img
                            src={Model2}
                            href="#"
                            alt="story"
                            style={style.storyIcon}
                          ></img>
                        </Button>
                        <p style={style.textStory}>Lopi Sup</p>
                      </Row>
                      <Row>
                        <Button variant="outline-light">
                          <img
                            src={Model3}
                            href="#"
                            alt="story"
                            style={style.storyIcon}
                          ></img>
                        </Button>
                        <p style={style.textStory}>Doplino Mira</p>
                      </Row>
                      <Row>
                        <Button variant="outline-light">
                          <img
                            src={AddStory}
                            href="#"
                            alt="story"
                            style={style.storyIcon}
                          ></img>
                        </Button>
                        <b style={style.textStory}>New Story</b>
                      </Row>
                    </Col>
                    <Col style={style.column_tengah} xs={5}>
                      <Row>
                        <Col xs={3}>
                          <img
                            src={Photo1}
                            className="Photo1"
                            style={style.icon}
                            alt="Photo1"
                            />
                        </Col>
                        <Col xs={5}>
                          <p><b>JAMES CARDIN</b></p>
                          <p>@JAMES_CARDIN_01</p>
                        </Col>
                        <Col xs={4}>
                          <Row>
                            <Button variant="primary" size="sm">
                              Edit Profile
                            </Button>{' '}
                            <Button variant="secondary" size="sm">
                              Logout
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p>10K Following</p>
                        </Col>
                        <Col>
                          <p>10K Follower</p>
                        </Col>
                        <Col>
                          <p>100 Like</p>
                        </Col>
                        <Col>
                          <p>3 Post</p>
                        </Col>
                      </Row>
                      <Row>
                        Aku anak sehat tubuhku kuat
                      </Row>
                      <Row>
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                          <Col>
                            <Nav.Item>
                              <Nav.Link eventKey="">Post</Nav.Link>
                            </Nav.Item>
                          </Col>
                          <Col>
                            <Nav.Item>
                              <Nav.Link eventKey="link-1">Bookmarks</Nav.Link>
                            </Nav.Item>
                          </Col>
                        </Nav>
                      </Row>
                    </Col>
                    <Col style={style.column_kanan}>
                    
                    </Col>
                    
                  </Row>
                </Container>

            </main>
        );
    }
}
export default Profile;