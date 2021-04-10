import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Row, Col, Button, Alert } from "react-bootstrap";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios'
import { URL_API } from '../utils/constant';
import Profile from '../asset/account.svg';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


class profileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                id: "",
                fullname: "",
                birth: "",
                bio: "",
                email: "",
                username: "",
                password: "",
                phoneNumber: "",
                profileImage: null,
            },
            value: 0,
            dataPhoto: []
        };
    }


    componentDidMount() {
        this.setState({
            data: {
                id: localStorage.getItem('id'),
                fullname: localStorage.getItem('fullname'),
                birth: localStorage.getItem('birth'),
                bio: localStorage.getItem('bio'),
                email: localStorage.getItem('email'),
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password'),
                phoneNumber: localStorage.getItem('phoneNumber'),
                profileImage: localStorage.getItem('profileImage')
            }
        })

        axios.get(URL_API + `api/getPost/${localStorage.getItem('id')}`).then((res) => {
            this.setState({ dataPhoto: res.data })
        })

    }
    
    render() {
        const style = {
            icon: {
                borderRadius: "55px",
                width: "120px",
                height: "120px",
            },
            button_edit: {
                marginRight: "10px",
                borderRadius: "30px",
            },
            button_logout: {
                borderRadius: "30px",
            },
            margin: {
                marginTop: "100px"
            },
            bio: {
                marginLeft: "3px"
            },
            follow: {
                marginTop: "15px"
            },
            post: {
                width: "200px",
                height: "300px",
                marginRight: "20px",
                marginBottom: "10px"
            }

        };

        const useStyles = theme => ({
            root: {
                flexGrow: 1,
                width: '100%',
                backgroundColor: theme.palette.background.paper,
            },
        });

        let body;
        let image;
        let imageProfile;
        let bio;
        let countPost=0;

        this.state.dataPhoto.map(photo => (
            countPost += 1
        ))

        if(this.state.data.bio !== "null"){
            bio = (
                <p>{this.state.data.bio}</p>
            )
        }else{
            bio = (
                <p>---</p>
            )
        }

        if (this.state.dataPhoto !== null) {
            image = (
                this.state.dataPhoto.map((data) =>
                    <img src={`data:image/jpeg;base64,${data.image}`} alt="post" style={style.post} />
                )
            );
        } else {
            image = (
                <center><p className="text-muted">Nothing's show Post</p></center>
            )
        }


        if (this.state.data.profileImage !== `data:image/jpeg;base64,null`) {
            imageProfile = (
                <img
                    src={localStorage.getItem('profileImage')}
                    className="PhotoProfile"
                    style={style.icon}
                    alt="PhotoProfile"
                />
            )
        } else {
            imageProfile = (
                <img
                    src={Profile}
                    className="PhotoDefault"
                    style={style.icon}
                    alt="PhotoDefault"
                />
            )
        }


        const change = (event, newValue) => this.setState({ value: newValue })
        if (this.state.data.id != null) {
            body = (
                <div>
                    <Row>
                        <Col xs={3}>
                            {imageProfile}
                        </Col>
                        <Col xs={5}>
                            <h3>{this.state.data.fullname}</h3>
                            <p>@{this.state.data.username}</p>
                        </Col>
                        <Col xs={4}>
                            <Row>
                                <Link to="/editprofile">
                                    <Button variant="dark" style={style.button_edit} size="sm">
                                        Edit Profile
                            </Button>
                                </Link>
                                <Link to="/">
                                    <Button variant="secondary" style={style.button_logout} size="sm" onClick={() => localStorage.clear()}>
                                        Logout
                            </Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={style.follow}>
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
                            <p>{countPost} Post</p>
                        </Col>
                    </Row>
                    <Row style={style.bio}>
                        {bio}
                    </Row>
                    <div className={useStyles.root}>
                        <Paper position="fixed" color="default">
                            <Tabs value={this.state.value}
                                onChange={change}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="Profile" {...a11yProps(0)}></Tab>
                                <Tab label="Bookmark" {...a11yProps(1)}></Tab>
                            </Tabs>
                            <TabPanel value={this.state.value} index={0}>
                                {image}
                            </TabPanel>
                            <TabPanel value={this.state.value} index={1}>
                                <center><p className="text-muted">Nothing's show</p></center>
                            </TabPanel>
                        </Paper>
                    </div>
                </div>
            )
        } else {
            body = (
                <Col className="justify-content-md-center" style={style.margin}>
                    <h2>Access Denied !!</h2>
                    <Alert key="1" variant="danger">
                        Kamu masih menjadi user{' '} <Alert.Link href="/signup">klik disini</Alert.Link> untuk signUp atau dapat kembali ke beranda{' '} <Alert.Link href="/">klik disini</Alert.Link>
                    </Alert>
                </Col>
            )
        }

        return (
            <div>
                {body}
            </div>
        )
    }
}
export default profileComponent;