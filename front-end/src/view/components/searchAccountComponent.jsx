import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap'
import { URL_API } from '../utils/constant';
import { withRouter } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Profile from '../asset/account.svg'

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

function SearchAccountComponent(props) {

    const { username } = props.match.params
    const [dataUser, setData] = useState([])
    const [dataPhoto, setDataPhoto] = useState([])
    const [value, setValue] = useState(0)

    useEffect(function getData() {
        axios.get(URL_API + `api/?search=username:${username}`).then(res => {
            setData(res.data)
        })

        dataUser.map((data) => (
            axios.get(URL_API + `api/getPost/${data.id}`).then((res) => {
                setDataPhoto(res.data)
            })
        ))

    }, [username, dataUser]);

    const style = {
        icon: {
            borderRadius: "55px",
            width: "120px",
            height: "120px",
        },
        button_follow: {
            borderRadius: "30px",
        },
        follow: {
            marginTop: "15px"
        },
        bio: {
            marginLeft: "3px"
        },
        post: {
            width: "200px",
            height: "300px",
            marginRight: "20px",
            marginBottom: "10px"
        },
        margin: {
            marginLeft: "-100px"
        }
    }

    let countPost = 0;

    dataPhoto.map((photo) => (
        countPost += 1
    ))

    const useStyles = theme => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    });

    const change = (event, newValue) => setValue({ value: newValue })

    let photoProfile;

    photoProfile = dataUser.map(data => {
        data.imageProfile !== null ?
            <img src={`data:image/jpeg;base64,${data.profileImage}`} alt="photoProfile" style={style.icon}></img>

            :
            <img
                src={Profile}
                className="PhotoDefault"
                style={style.icon}
                alt="PhotoDefault"
            />
    });

    return (
        <div>
            {dataUser.map(data => (
                <div>
                    <Row>
                        <Col xs={3}>
                            {photoProfile}
                        </Col>
                        <Col xs={5}>
                            <h3>{data.fullname}</h3>
                            <p>@{data.username}</p>
                        </Col>
                        <Col xs={4}>
                            <Row>
                                <Button variant="secondary" style={style.button_follow} size="sm" onClick={() => localStorage.clear()}>
                                    Follow
                            </Button>
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
                        {data.bio}
                    </Row>
                </div>
            ))}
            <div className={useStyles.root}>
                <Paper position="fixed" color="default">
                    <Tabs value={value}
                        onChange={change}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Profile" {...a11yProps(0)} disabled></Tab>
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        {dataPhoto.map((photo) =>
                            <img src={`data:image/jpeg;base64,${photo.image}`} alt="post" style={style.post}></img>
                        )}
                    </TabPanel>
                </Paper>
            </div>


        </div>
    )
}
export default withRouter(SearchAccountComponent);