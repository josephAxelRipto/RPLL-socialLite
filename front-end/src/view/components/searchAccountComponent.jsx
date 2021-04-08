import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap'
import { URL_API } from '../utils/constant';
import { withRouter } from "react-router-dom";

function SearchAccountComponent(props) {

    const { username } = props.match.params
    const [dataUser, setData] = useState([])
    const [dataPhoto, setDataPhoto] = useState([])

    useEffect(function getData() {
        // const fetchData = async () => {
        //     const result = await axios(URL_API + `api/?search=username:${username}`)
        //     setData(result.data)
        //     console.log(result)
        //     const photo = await axios(URL_API + `api/getPost/${result.data.id}`)
        //     setDataPhoto(photo.data)
        // }
        // fetchData();
        axios.get(URL_API + `api/?search=username:${username}`).then(res => {
            setData(res.data)
        })

        // axios.get(URL_API + `api/getPost/${id}`).then((res) => {
        //     setDataPhoto(res.data)
        // })

    }, [username]);

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

    return (
        <div>
            {dataUser.id}
            {dataUser.map(data => (
                <div>
                    <Row>
                        <Col xs={3}>
                            <img src={`data:image/jpeg;base64,${data.profileImage}`} alt="photoProfile" style={style.icon}></img>
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
                            <p>3 Post</p>
                        </Col>
                    </Row>
                    <Row style={style.bio}>
                        {data.bio}
                    </Row>
                </div>
            ))}
            {dataPhoto.map((photo) =>
                <Row>
                    <img src={`data:image/jpeg;base64,${photo.image}`} alt="post" style={style.post}></img>
                </Row>
            )}

        </div>
    )
}
export default withRouter(SearchAccountComponent);