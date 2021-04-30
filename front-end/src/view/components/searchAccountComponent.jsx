import React, { useState, useEffect } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";
import { URL_API } from "../utils/constant";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Profile from "../asset/account.svg";
import swal from "sweetalert";
import PropTypes from "prop-types";
import axios from "axios";

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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function SearchAccountComponent(props) {
  const { username } = props.match.params;
  const [dataUser, setData] = useState([]);
  const [dataPhoto, setDataPhoto] = useState([]);
  const [value, setValue] = useState(0);
  const [src, setSrc] = useState(null);
  const [foundAccount, setFoundAccount] = useState(false);
  const [dataFollowing, setDataFollowing] = useState([]);
  const [dataFollower, setDataFollower] = useState([]);
  const [followMember, setFollowMember] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          URL_API + `api/?search=username:${username}`
        );
        setData(response.data);

        axios
          .get(URL_API + `api/getPost/${response.data[0].id}`)
          .then((res) => {
            setDataPhoto(res.data);
          });

        axios
          .get(URL_API + `api/GetFollowing/${response.data[0].id}`)
          .then((res) => {
            setDataFollowing(res.data);
          });

        axios
          .get(URL_API + `api/GetFollower/${response.data[0].id}`)
          .then((res) => {
            setDataFollower(res.data);
          });

        axios
          .get(URL_API + `api/GetFollowing/${localStorage.getItem("id")}`)
          .then((res) => {
            setFollowMember(res.data);
          });

        setSrc(
          response.data[0].profileImage
            ? `data:image/jpeg;base64,${response.data[0].profileImage}`
            : Profile
        );
        setFoundAccount(true);
      } catch (error) {}
    }
    fetchData();
  }, [username]);

  const follow = (id) => {
    if (localStorage.getItem("id") !== null) {
      axios
        .post(URL_API + `api/follow/${localStorage.getItem("id")}/${id}`)
        .then((res) => {
          axios.get(URL_API + `api/GetFollowing/${id}`).then((res) => {
            setDataFollowing(res.data);
          });

          axios.get(URL_API + `api/GetFollower/${id}`).then((res) => {
            setDataFollower(res.data);
          });

          axios
            .get(URL_API + `api/GetFollowing/${localStorage.getItem("id")}`)
            .then((res) => {
              setFollowMember(res.data);
            });
        })
        .catch((error) => {
          const errorMessage = JSON.parse(error.request.response);
          swal({
            title: "Gagal",
            text: "Gagal, " + errorMessage.message,
            icon: "error",
            button: false,
            timer: 2500,
          });
        });
    } else {
      swal({
        title: "Failed",
        text: "Failed, You Must Login Or SignUp",
        icon: "error",
        button: false,
        timer: 2500,
      });
    }
  };

  const unfollow = (id) => {
    axios
      .post(URL_API + `api/Unfollow/${localStorage.getItem("id")}/${id}`)
      .then((res) => {
        axios.get(URL_API + `api/GetFollowing/${id}`).then((res) => {
          setDataFollowing(res.data);
        });

        axios.get(URL_API + `api/GetFollower/${id}`).then((res) => {
          setDataFollower(res.data);
        });

        axios
          .get(URL_API + `api/GetFollowing/${localStorage.getItem("id")}`)
          .then((res) => {
            setFollowMember(res.data);
          });
      });
  };

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
      marginTop: "15px",
    },
    bio: {
      marginLeft: "3px",
    },
    post: {
      width: "200px",
      height: "300px",
      marginRight: "20px",
      marginBottom: "10px",
    },
    margin: {
      marginLeft: "-100px",
    },
  };

  let countFollower = 0;
  let countFollowing = 0;
  let countPost = 0;
  let countLike = 0;
  let body;

  dataFollower.map((follower) => (countFollower += 1));

  dataFollowing.map((following) => (countFollowing += 1));

  dataPhoto.map((photo) => (countPost += 1));

  dataPhoto.map((photo) => (countLike += photo.countLike));

  const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  });

  const change = (event, newValue) => setValue({ value: newValue });

  if (foundAccount) {
    body = (
      <div>
        {dataUser.map((data) => (
          <div>
            <Row>
              <Col xs={3}>
                <img src={src} alt="photoProfile" style={style.icon}></img>
              </Col>
              <Col xs={5}>
                <h3>{data.fullname}</h3>
                <p>@{data.username}</p>
              </Col>
              <Col xs={4}>
                {localStorage.getItem("id") !== null ? (
                  localStorage.getItem("id") != data.id ? (
                    <Row>
                      {followMember.find((f) => f.id === data.id) ? (
                        <Button
                          variant="secondary"
                          style={style.button_follow}
                          size="sm"
                          onClick={() => unfollow(data.id)}
                        >
                          Unfollow
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          style={style.button_follow}
                          size="sm"
                          onClick={() => follow(data.id)}
                        >
                          Follow
                        </Button>
                      )}
                    </Row>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </Col>
            </Row>
            <Row style={style.follow}>
              <Col>
                <p>{countFollowing} Following</p>
              </Col>
              <Col>
                <p>{countFollower} Follower</p>
              </Col>
              <Col>
                <p>{countLike} Like</p>
              </Col>
              <Col>
                <p>{countPost} Post</p>
              </Col>
            </Row>
            <Row style={style.bio}>{data.bio}</Row>
          </div>
        ))}
        <div className={useStyles.root}>
          <Paper position="fixed" color="default">
            <Tabs
              value={value}
              onChange={change}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Profile" {...a11yProps(0)} disabled></Tab>
            </Tabs>
            <TabPanel value={value} index={0}>
              {dataPhoto.map((photo) => (
                <img
                  src={`data:image/jpeg;base64,${photo.image}`}
                  alt="post"
                  style={style.post}
                ></img>
              ))}
            </TabPanel>
          </Paper>
        </div>
      </div>
    );
  } else {
    body = (
      <Col className="justify-content-md-center" style={style.margin}>
        <h2>Account Not Found</h2>
        <Alert key="1" variant="danger">
          User Not Found!! <Alert.Link href="/">Back to home...</Alert.Link>
        </Alert>
      </Col>
    );
  }

  return <div>{body}</div>;
}
export default withRouter(SearchAccountComponent);
