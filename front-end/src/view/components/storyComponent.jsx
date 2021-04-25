import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Homelogo from "../asset/home-24px.svg";
import AddStory from "../asset/add_circle-24px.svg";
import { Row } from "react-bootstrap";
import Sticky from 'react-sticky-el';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Model1 from "../asset/model1.jpeg";
import Model2 from "../asset/model2.jpg";
import Model3 from "../asset/model3.jpg";
import ViewStoryComponent from './viewStoryComponent';

class storyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            show: false
        };
    }

    click = () => {
        console.log("click");
    }

    handleClose = () => this.setState({ show: false, id: "" })
    handleShow = () => {
        this.setState({ show: true, id: localStorage.getItem('id') }, () => {setTimeout(this.handleClose, 3000)});
    }

    render() {
        const style = {
            logo_home: {
                width: "50px",
                height: "50px",
            },
            tulisanSocialStory: {
                marginLeft: "15px",
                marginTop: "50px",
            },
            storyIcon: {
                borderRadius: "55px",
                width: "50px",
                height: "50px",
            },
            textStory: {
                marginLeft: "12px",
                marginTop: "10px"
            },
            margin: {
                marginBottom: "10px"
            },
            sticky: {
                height: '550px',
                overflow: 'scroll',
                position: "fixed"
            },
            tulisanHOME: {
                marginTop: "15px"
            },
            link: {
                textDecoration: "none",
                color: "black"
            }
        };

        const useStyles = theme => ({
            root: {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
        });

        return (
            <div className="scrollarea" style={style.sticky} >
                <Sticky>
                    <List dense className={useStyles.root}>
                        <Link to="/" style={style.link}>
                            <ListItem key="1" button style={style.margin}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="story"
                                        src={Homelogo} />
                                </ListItemAvatar>
                                <ListItemText primary={'HOME'} />
                            </ListItem>
                        </Link>
                        <Row style={style.tulisanSocialStory}>
                            <p className="text-muted">SOCIAL STORY</p>
                        </Row>
                        <ListItem key="1" button style={style.margin} onClick={this.handleShow}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="story"
                                    src={Model1} />
                            </ListItemAvatar>
                            <ListItemText primary={'Jane Lopinaz'} />
                        </ListItem>
                        <ViewStoryComponent show={this.state.show} onHide={this.handleClose} id={this.state.id} image={Model1}/>
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
                        <Link to="/story" style={style.link} >
                            <ListItem key="0" button>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="story"
                                        src={AddStory} />
                                </ListItemAvatar>
                                <ListItemText primary={'Add Story'} />
                            </ListItem>
                        </Link>
                    </List>
                </Sticky>
            </div >
        )
    }
}

export default withRouter(storyComponent);