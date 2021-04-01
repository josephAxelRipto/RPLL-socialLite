import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import NavbarComponent from "../components/navbarComponent";

// import foto
import DmLogo from "../asset/dmMessage.png";
import Line from "../asset/line.png";

// entar hapus
import Model1 from "../asset/model1.jpeg";
import Model2 from "../asset/model2.jpg";
import Model3 from "../asset/model3.jpg";


class DirrectMessage extends Component {

  render() {
    const style = {
      logo_home: {
        width: "50px",
        height: "50px",
        marginRight: "10px",
        marginLeft: "30px",
      },
      garis_kiri:{
        width : "250px",
      },
      garis_kanan:{
        width : "500px",
        height : "70px",
        marginTop: "3px",
      },
      column_kiri: {
        width : "30%",
        marginTop: "150px",
        marginRight: "90px"
      },
      tulisanHOME: {
        marginTop: "10px",
        marginLeft: "40px",
      },
      tulisanSocialStory: {
        marginLeft: "15px",
        marginTop: "0px",
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
        marginTop: "140px",
        marginRight:'100px',
      },
      iconDm : {
        borderRadius: "55px",
        width: "50px",
        height: "50px",
        marginTop: "10px",
        marginLeft : "10px",
      },
      rectangleSender: {
        width: '200px',
        height: '25px',
        borderRadius : '50px',
        marginLeft : '20px', 
        marginTop: "20px",
        textAlign :'center',
        borderColor : 'red',
      },
      rectangleReceiver: {
        backgroundColor : 'lightgrey',
        width: '200px',
        height: '25px',
        borderRadius : '50px',
        marginLeft : '380px', 
        marginTop: "20px",
        textAlign :'center',
      },
    };
    return (
      <main>
        <Switch>
          <NavbarComponent/>
        </Switch>
        <Container>
          <Row>
            <Col xs={{ order: "first" }} style={style.column_kiri} fixed="top">
              <Row>
                <h3 style={style.tulisanHOME}>Chats</h3>
                <img src={DmLogo} alt="logo" style={style.logo_home}></img>
              </Row>
              <Row style={style.tulisanSocialStory}>
                <img src={Line} alt="logo" style={style.garis_kiri}></img>
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
            </Col>
            
            {/* disini buat masukin DM */}
            <Col style={style.column_tengah}>
              <Row>
                <Button variant="outline-light">
                    <img
                      src={Model1}
                      href="#"
                      alt="story"
                      style={style.storyIcon}
                    ></img>
                  </Button>
                  <b style={style.textStory}>Jane Lopinaz</b>
              </Row>
              <Row style={style.tulisanSocialStory}>
                <img src={Line} alt="logo" style={style.garis_kanan}></img>
              </Row>
              <Row>
                <img src={Model1} href="#" alt="story" style={style.iconDm}></img>
                <p style={style.rectangleSender}>Holla Como Estass</p>
              </Row>
              <Row>
                <p style={style.rectangleReceiver}>Holla Como Estass</p>
              </Row>
              <Row style={{marginTop:"250px",marginLeft:"10px"}}>
                <form>
                  <label>
                    <input type="text" name="name" />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
export default DirrectMessage;
