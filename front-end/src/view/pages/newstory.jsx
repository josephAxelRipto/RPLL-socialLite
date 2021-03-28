import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";
import Setting from "../asset/settings.svg";
import LogoUpload from "../asset/file_upload.svg";
// import PreviewPost from "../components/PreviewPost";
import Dropzone from 'react-dropzone';

class newstory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageFile: [],
            id: "",
            duration: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            id: localStorage.getItem('id')
        })
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
            Icon: {
                width: "40px",
                height: "40px",
                marginBottom: "10px"
            },
            text: {
                marginTop: "5px",
                marginLeft: "7px"
            },
            iconUpload: {
                width: "40px",
                height: "40px",
                marginBottom: "10px",
                marginLeft: "15px"
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
                        <b><h2 style={style.judul}>New Story</h2></b>
                    </Col>
                </Row>
                <hr style={style.hr} />
                <Row style={style.body}>
                    <Col>
                        <h3>CREATE YOUR <br />STORY</h3>
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
                            <img src={Setting} alt="setting" style={style.Icon} />
                            <h5 style={style.text}>Setting</h5>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Control
                                    name="duration"
                                    type="number"
                                    autoComplete="off"
                                    value={this.state.caption}
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder="duration"
                                    required
                                />
                                <hr style={style.hr} />
                                <Row>
                                    <img src={LogoUpload} style={style.iconUpload} alt="upload" />
                                    <b><h5 style={style.text}>Upload Story</h5></b>
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
export default newstory;
