import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Comment from "../asset/textsms-24px.svg";
import Like from "../asset/favorite-24px.svg";
import Bookmark from "../asset/bookmark_add-24px.svg";


import Model1 from "../asset/model1.jpeg";
import Model2 from "../asset/model2.jpg";
import Model4 from "../asset/model4.jpg";

class postComponent extends Component {
    render() {
        const style = {
            logo_home: {
              width: "50px",
              height: "50px",
              marginRight: "10px",
            },
            column_kiri: {
              marginTop: "150px",
              marginRight: "90px",
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
            <div>
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
                          <Button>
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
            </div>
        )
    }
}
export default postComponent;