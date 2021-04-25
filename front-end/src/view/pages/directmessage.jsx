import React, { Component } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
import NavbarComponent from '../components/navbarComponent';
// import ProfileComponent from '../components/profileComponent';
import Sticky from 'react-sticky-el';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { URL_API } from '../utils/constant.js'

import Model1 from "../asset/model1.jpeg";
import Model2 from "../asset/model2.jpg";
import Model3 from "../asset/model3.jpg";

class DirectMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listDM: []
    }
  }

  componentDidMount = () => {
    axios.get(URL_API + `api/findAllDM`).then((res) => {
      this.setState({listDM : res.data})
      console.log(res.data[0].from)
    })
  }

  render() {
    const style = {
      margin: {
        marginBottom: "10px"
      },
      col_left: {
        marginTop: "150px"
      },
      sticky: {
        height: '550px',
        overflow: 'scroll',
        position: "fixed"
      },
      tulisanDirectMessage: {
        marginLeft: '20px'
      }
    }

    const useStyles = theme => ({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    });

    return (
      <Container>
        <NavbarComponent />
        <Row style={style.col_left}>
          <Col sm="3">
            <div className="scrollarea" style={style.sticky} >
              <Sticky>
                <List dense className={useStyles.root}>
                  <Row style={style.tulisanDirectMessage}>
                    <p className="text-muted">DIRECT MESSAGE</p>
                  </Row>
                  <ListItem key="1" button style={style.margin}>
                    <ListItemAvatar>
                      <Avatar
                        alt="story"
                        src={Model1} />
                    </ListItemAvatar>
                    <ListItemText primary={'Jane Lopinaz'} />
                  </ListItem>
                  <ListItem key="2" button style={style.margin}>
                    <ListItemAvatar>
                      <Avatar
                        alt="story"
                        src={Model2} />
                    </ListItemAvatar>
                    <ListItemText primary={'Lopi Sup'} />
                  </ListItem>
                  <ListItem key="3" button style={style.margin} onClick={this.click}>
                    <ListItemAvatar>
                      <Avatar
                        alt="story"
                        src={Model3} />
                    </ListItemAvatar>
                    <ListItemText primary={'Doplino Mira'} />
                  </ListItem>
                </List>
              </Sticky>
            </div >
          </Col>
          <Col sm="8">
            {/* <ProfileComponent /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DirectMessage;