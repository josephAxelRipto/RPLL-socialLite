import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import NavbarComponent from "../components/navbarComponent";

import Model1 from "../asset/model1.jpeg";
import Model2 from "../asset/model2.jpg";
import Model3 from "../asset/model3.jpg";
import Model4 from "../asset/model4.jpg";
import Model5 from "../asset/model5.jpg";
import Model6 from "../asset/model6.jpg";
import Model7 from "../asset/model7.jfif";
import Photo1 from "../asset/model1.jpeg";

import Homelogo from "../asset/home-24px.svg";
import AddStory from "../asset/add_circle-24px.svg";
import Comment from "../asset/textsms-24px.svg";
import Like from "../asset/favorite-24px.svg";
import Bookmark from "../asset/bookmark_add-24px.svg";

class Profile extends Component {
    render (){
        const style = {
            logo_home: {
              width: "50px",
              height: "50px",
              marginRight: "10px",
            },
            column_kiri: {
              marginTop: "150px",
              fixed:"top"
            },
            tulisanHOME: {
              marginTop: "10px",
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
              marginTop: "150px"
            },
            column_kanan: {
              marginTop: "150px",
              marginLeft: "80px",
            },
            iconPostingan: {
              borderRadius: "55px",
              width: "60px",
              height: "60px",
            },
            marginIconPostingan: {
              marginTop: "7px",
              marginLeft: "10px",
              marginBottom: "7px",
            },
            textNamaPost: {
              marginTop: "10px",
              marginLeft: "15px",
              fontSize: "25px",
            },
            jarakPerPostingan: {
              marginBottom: "30px",
            },
            comment: {
              marginLeft: "-20px",
              width: "40px",
              height: "40px",
            },
            jumlahComment: {
              marginTop: "-10px",
            },
            ukuranFoto: {
              width: "450px",
              height: "400px",
            },
            like: {
              marginLeft: "-20px",
              width: "40px",
              height: "40px",
            },
            jumlahLike: {
              marginTop: "-10px",
              marginRight: "-7px",
            },
            bookmark: {
              marginLeft: "-20px",
              width: "40px",
              height: "40px",
            },
            goBottom: {
              marginTop: "200px",
            },
            buttonFollow: {
              marginTop: "20px",
              marginLeft: "200px",
            },
          };
          const style_photo = {
            // marginLeft: "380px",
            // display : "flex",
            width: "100px",
            height: "100px",
            borderRadius: "70px",
          };
          const user_name = {
            marginTop: "50px",
          };
        return (
            <main>
                <Switch>
                    <NavbarComponent />
                </Switch>
                <Container>
                  <Row md={3}>
                    <Col xs={{ order: "first" }} style={style.column_kiri}>
                      <Row>
                        <h3 style={style.tulisanHOME}>PROFILE</h3>
                      </Row>
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
                    <Col style={{marginTop:"100px"}}>
                      <Row>
                        <Col>
                          <img
                            src={Photo1}
                            className="Photo1"
                            style={style_photo}
                            alt="Photo1"
                            />
                        </Col>
                        <Col>
                          <h3 style={user_name}> JAMES CARDIN </h3>
                          <p>@JAMES_CARDIN_01</p>
                        </Col>
                        <Col>
                          <div>
                            <Button variant="primary" size="sm">
                              Edit Profile
                            </Button>{' '}
                            <Button variant="secondary" size="sm">
                              Logout
                            </Button>
                          </div>
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
                    </Col>
                    
                  </Row>
                </Container>

            </main>
        );
    }
}
export default Profile;