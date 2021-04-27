import React, { Component } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
import NavbarComponent from '../components/navbarComponent';
import Sticky from 'react-sticky-el';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { URL_API } from '../utils/constant.js'
import Profile from '../asset/account.svg';
import ChatComponent from '../components/chatComponent';

class DirectMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listDM: [],
      id: "",
      fullname: ""
    }
  }

  componentDidMount = () => {
    axios.get(URL_API + `api/findAllChatMember/${localStorage.getItem('id')}`).then((res) => {
      this.setState({listDM : res.data})
    }).catch((e) => {
      console.log(e.error)
    })
  }

  openChat = (id, fullname) => {
    console.log(id)
    this.setState({ id: id, fullname: fullname})
  }

  render() {
    const style = {
      margin: {
        marginBottom: "10px",
        marginLeft: '15px'
      },
      col_left: {
        marginTop: "150px"
      },
      sticky: {
        height: '550px',
        width: '250px',
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
                  {this.state.listDM.map(data => 
                    data.id === localStorage.getItem('id')? 
                      ""
                      :(<ListItem key={data.id} button style={style.margin} onClick={() => this.openChat(data.id, data.fullname)}>
                      <ListItemAvatar>
                        <Avatar
                          alt="story"
                          src={data.profileImage !== null? `data:image/jpeg;base64,${data.profileImage}` : Profile} />
                      </ListItemAvatar>
                      <ListItemText primary={data.fullname} />
                    </ListItem>)
                  )}
                </List>
              </Sticky>
            </div >
          </Col>
          <Col sm={8}>
            <ChatComponent id={this.state.id} fullname={this.state.fullname}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DirectMessage;