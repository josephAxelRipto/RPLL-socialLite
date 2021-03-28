import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import NavbarComponent from "../components/navbarComponent";

// entar hapus
import Model1 from "../asset/model1.jpeg";
import Model2 from "../asset/model2.jpg";
import Model3 from "../asset/model3.jpg";
import Model4 from "../asset/model4.jpg";
import Model5 from "../asset/model5.jpg";
import Model6 from "../asset/model6.jpg";
import Model7 from "../asset/model7.jfif";

// jangan dihapus
import Homelogo from "../asset/home-24px.svg";
import AddStory from "../asset/add_circle-24px.svg";
import Comment from "../asset/textsms-24px.svg";
import Like from "../asset/favorite-24px.svg";
import Bookmark from "../asset/bookmark_add-24px.svg";

class Home extends Component {

  render() {
    const style = {
      logo_home: {
        width: "50px",
        height: "50px",
        marginRight: "10px",
      },
      column_kiri: {
        marginTop: "150px",
        marginRight: "90px"
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
        marginTop: "150px",
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
    return (
      <main>
        <Switch>
          <NavbarComponent />
        </Switch>
        <Container>
          <Row>
            <Col xs={{ order: "first" }} style={style.column_kiri} fixed="top">
              <Row>
                <img src={Homelogo} alt="logo" style={style.logo_home}></img>
                <h3 style={style.tulisanHOME}>HOME</h3>
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
                <Link to="/story">
                  <Button variant="outline-light">
                    <img
                      src={AddStory}
                      alt="story"
                      style={style.storyIcon}
                    ></img>
                  </Button>
                </Link>
                <b style={style.textStory}>New Story</b>
              </Row>
            </Col>

            {/* disini buat masukin gambar postingan */}
            <Col style={style.column_tengah}>
              <Row style={style.jarakPerPostingan}>
                <Card
                  border="light"
                  style={{ width: "35rem", height: "35rem" }}
                >
                  <Row style={style.marginIconPostingan}>
                    <Card.Img
                      src={Model2}
                      style={style.iconPostingan}
                      alt="icon"
                    />
                    <b style={style.textNamaPost}>Lopi Sup</b>
                    <Button
                      variant="outline-secondary"
                      style={style.buttonFollow}
                    >
                      FOLLOW
                    </Button>
                  </Row>
                  <Card.Body>
                    <Card.Text className="text-muted">
                      Unexpected! , Purple is my #Purple #Lite
                    </Card.Text>
                    <Row>
                      <Col>
                        <Card.Img src={Model2} style={style.ukuranFoto} />
                      </Col>

                      {/* action dari gambar postingannya */}
                      <Col>
                        <Row>
                          <Button variant="outline-light">
                            <img
                              src={Bookmark}
                              href="#"
                              alt="story"
                              style={style.bookmark}
                            ></img>
                          </Button>
                        </Row>
                        <Row style={style.goBottom}>
                          <Button variant="outline-light">
                            <img
                              src={Like}
                              href="#"
                              alt="story"
                              style={style.like}
                            ></img>
                          </Button>
                        </Row>
                        {/* disini buat angka like nya */}
                        <Row style={style.jumlahLike}>
                          <p>1051</p>
                        </Row>
                        <Row>
                          <Button variant="outline-light">
                            <img
                              src={Comment}
                              href="#"
                              alt="story"
                              style={style.comment}
                            ></img>
                          </Button>
                        </Row>
                        {/* disini buat angka comment nya */}
                        <Row style={style.jumlahComment}>
                          <p>500</p>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>

              {/* postingan baru */}
              <Row style={style.jarakPerPostingan}>
                <Card
                  border="light"
                  style={{ width: "35rem", height: "35rem" }}
                >
                  <Row style={style.marginIconPostingan}>
                    <Card.Img
                      src={Model4}
                      style={style.iconPostingan}
                      alt="icon"
                    />
                    <b style={style.textNamaPost}>Jeniper Dewi</b>
                    <Button
                      variant="outline-secondary"
                      style={style.buttonFollow}
                    >
                      FOLLOW
                    </Button>
                  </Row>
                  <Card.Body>
                    <Card.Text className="text-muted">
                      My Futureee......
                    </Card.Text>
                    <Row>
                      <Col>
                        <Card.Img src={Model4} style={style.ukuranFoto} />
                      </Col>

                      {/* action dari gambar postingannya */}
                      <Col>
                        <Row>
                          <Button variant="outline-light">
                            <img
                              src={Bookmark}
                              href="#"
                              alt="story"
                              style={style.bookmark}
                            ></img>
                          </Button>
                        </Row>
                        <Row style={style.goBottom}>
                          <Button variant="outline-light">
                            <img
                              src={Like}
                              href="#"
                              alt="story"
                              style={style.like}
                            ></img>
                          </Button>
                        </Row>
                        {/* disini buat angka like nya */}
                        <Row style={style.jumlahLike}>
                          <p>934</p>
                        </Row>
                        <Row>
                          <Button variant="outline-light">
                            <img
                              src={Comment}
                              href="#"
                              alt="story"
                              style={style.comment}
                            ></img>
                          </Button>
                        </Row>
                        {/* disini buat angka comment nya */}
                        <Row style={style.jumlahComment}>
                          <p>10</p>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>

              {/* postingan baru */}
              <Row style={style.jarakPerPostingan}>
                <Card
                  border="light"
                  style={{ width: "35rem", height: "35rem" }}
                >
                  <Row style={style.marginIconPostingan}>
                    <Card.Img
                      src={Model1}
                      style={style.iconPostingan}
                      alt="icon"
                    />
                    <b style={style.textNamaPost}>Jane Lopinazzzz</b>
                    <Button
                      variant="outline-secondary"
                      style={style.buttonFollow}
                    >
                      FOLLOW
                    </Button>
                  </Row>
                  <Card.Body>
                    <Card.Text className="text-muted">
                      Lookss my hair so beatiful........
                    </Card.Text>
                    <Row>
                      <Col>
                        <Card.Img src={Model1} style={style.ukuranFoto} />
                      </Col>

                      {/* action dari gambar postingannya */}
                      <Col>
                        <Row>
                          <Button variant="outline-light">
                            <img
                              src={Bookmark}
                              href="#"
                              alt="story"
                              style={style.bookmark}
                            ></img>
                          </Button>
                        </Row>
                        <Row style={style.goBottom}>
                          <Button variant="outline-light">
                            <img
                              src={Like}
                              href="#"
                              alt="story"
                              style={style.like}
                            ></img>
                          </Button>
                        </Row>
                        {/* disini buat angka like nya */}
                        <Row style={style.jumlahLike}>
                          <p>934</p>
                        </Row>
                        <Row>
                          <Button variant="outline-light">
                            <img
                              src={Comment}
                              href="#"
                              alt="story"
                              style={style.comment}
                            ></img>
                          </Button>
                        </Row>
                        {/* disini buat angka comment nya */}
                        <Row style={style.jumlahComment}>
                          <p>50</p>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>
            </Col>

            {/* disini buat suggested account */}
            <Col style={style.column_kanan}>
              <Row>
                <p className="text-muted">SUGGESTED ACCOUNT</p>
              </Row>
              {/* ini suggested account */}
              <Row>
                <Button variant="outline-light">
                  <img
                    src={Model5}
                    href="#"
                    alt="story"
                    style={style.storyIcon}
                  ></img>
                </Button>
                <p style={style.textStory}>Luna Maya</p>
              </Row>

              {/* ini suggest account yang baru */}
              <Row>
                <Button variant="outline-light">
                  <img
                    src={Model7}
                    href="#"
                    alt="story"
                    style={style.storyIcon}
                  ></img>
                </Button>
                <p style={style.textStory}>Mamank</p>
              </Row>
              <Row>
                <Button variant="outline-light">
                  <img
                    src={Model6}
                    href="#"
                    alt="story"
                    style={style.storyIcon}
                  ></img>
                </Button>
                <p style={style.textStory}>Who Am I?</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
export default Home;
