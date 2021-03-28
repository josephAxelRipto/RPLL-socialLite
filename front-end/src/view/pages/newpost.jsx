import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";
// import PreviewPost from "../components/PreviewPost";
import Dropzone from 'react-dropzone';
import Profile from "../asset/model1.jpeg";
import Upload from "../asset/file_upload.svg";

class newpost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageFile: [],
            caption: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onDrop(imageFile) {
        this.setState({
            imageFile: imageFile
        })
        console.log(imageFile)
    }

    render() {
        const style = {
            logo: {
                marginTop: "20px",
                width: "120px",
                height: "100px",
            },
            judul: {
                marginTop: "70px",
                marginLeft: "-90px"
            },
            hr: {
                border: "1px solid",
            },
            body: {
                marginTop: "90px"
            },
            profile: {
                borderRadius: "70px",
                width: "40px",
                height: "40px",
                marginRight: "40px"
            },
            columnKanan: {
                marginTop: "50px",
                marginLeft: "40px"
            },
            uploadButton: {
                width: "200px",
                marginTop: "40px"
            },
            buttonGoBack: {
                marginTop: "350px",
                marginLeft: "40px"
            },
            iconUpload: {
                width: "40px",
                height: "40px",
                marginBottom: "10px",
                marginLeft: "15px"
            },
            text: {
                marginTop: "5px",
                marginLeft: "5px"
            }

        };
        return (
            <Container>
                <Row>
                    <Col>
                        <Link to="/">
                            <img src={Logo} className="logo" style={style.logo} alt="Logo" />
                        </Link>
                    </Col>
                    <Col>
                        <b><h2 style={style.judul}>New Post</h2></b>
                    </Col>
                </Row>
                <hr style={style.hr} />
                <Row style={style.body}>
                    <Col>
                        <h3>CREATE YOUR POST</h3>
                        <Link to="/">
                            <Button
                                variant="light"
                                type="submit"
                                size="lg"
                                style={style.buttonGoBack}
                            >
                                &#60; Go Home
              </Button>
                        </Link>
                    </Col>
                    <Col>
                        {/* <Dropzone onDrop={this.onDrop.bind(this)} className="dropzone" activeClassName="active-dropzone" multiple={false}>
                            <p>Taro image disini</p>
                        </Dropzone>
                        {this.state.imageFile.length > 0? <div>
                            <p>uploading {this.state.imageFile.length} files....</p>
                            <div>{this.state.imageFile.map((file) => <img src={file.preview} alt="preview"></img>)}</div>
                            </div>: null} */}
                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)} onChange={(event) => this.handleChange(event)}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </Col>
                    <Col style={style.columnKanan}>
                        <Row>
                            <img src={Profile} alt="profile" style={style.profile}>
                            </img>
                            <Form>
                                <Form.Control
                                    name="caption"
                                    as="textarea"
                                    rows={3}
                                    value={this.state.caption}
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder="Write Caption"
                                    required
                                />
                                <hr style={style.hr} />
                                <Row>
                                    <img src={Upload} alt="upload" style={style.iconUpload}/>
                                <b><h5 style={style.text}>Upload Post</h5></b>
                                </Row>
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    size="lg"
                                    style={style.uploadButton}
                                    block
                                    rounded
                                >
                                    Upload
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default newpost;
