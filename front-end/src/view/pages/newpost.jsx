import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'react-image-crop/dist/ReactCrop.css';
import Logo from "../asset/logo.png";
import Dropzone from 'react-dropzone';
import Profile from "../asset/model1.jpeg";
import Upload from "../asset/file_upload.svg";


const imageMaxSize = 1000000 //dalam bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => { return item.trim() })

class newpost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageFile: null,
            caption: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    verifyFile = (file) => {
        if (file && file.length > 0) {
            const currentFile = file[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if (currentFileSize > imageMaxSize) {
                alert('File terlalu besar: ' + currentFileSize)
                return false
            }

            if (!acceptedFileTypesArray.includes(currentFileType)) {
                alert('Cuma bisa insert Foto yah')
                return false
            }
            return true
        }
    }

    handelOnDrop = (files, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
            this.verifyFile(rejectedFiles)
        }

        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files)
            if (isVerified) {
                //image64data
                const currentFile = files[0]
                const myFileItemReader = new FileReader()
                myFileItemReader.addEventListener("load", () => {
                    console.log(myFileItemReader.result)
                    this.setState({
                        imageFile: myFileItemReader.result
                    })
                }, false)

                myFileItemReader.readAsDataURL(currentFile)
            }
        }
    }

    clear = (event) => {
        event.preventDefault()
        this.setState = {
            imageFile: null
        }
        this.props.history.push("/upload")

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
            },
            previewImage: {
                width: "450px",
                height: "400px",
                marginBottom: "100px"
            },
            text_area: {
                marginRight: "-90px"
            }

        };
        const imgSrc = this.state.imageFile
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
                        {imgSrc != null ?
                            <div>
                                <Dropzone onDrop={this.handelOnDrop} accept='image/*' multiple={false} maxSize={this.imageMaxSize}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <b><p>Click or Drag new image here for change image!!!</p></b>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                <p>Preview Post</p>
                                <img src={imgSrc} alt="preview" style={style.previewImage}></img>
                            </div>

                            :

                            <Dropzone onDrop={this.handelOnDrop} accept='image/*' multiple={false} maxSize={this.imageMaxSize}>
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <b><p>Click or Drag new image here !!!</p></b>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>}

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
                                    style={style.text_area}
                                    required
                                />
                                <hr style={style.hr} />
                                <Row>
                                    <img src={Upload} alt="upload" style={style.iconUpload} />
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
