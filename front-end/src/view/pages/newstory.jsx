import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";
import Setting from "../asset/settings.svg";
import LogoUpload from "../asset/file_upload.svg";
// import PreviewPost from "../components/PreviewPost";
import Dropzone from 'react-dropzone';


const imageMaxSize = 1000000 //dalam bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => { return item.trim() })

class newstory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageFile: null,
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
            },
            uploadButton: {
                width: "200px",
                marginTop: "40px"
            },
            buttonGoBack: {
                marginTop: "300px",
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
            },
            previewImage: {
                width: "450px",
                height: "400px",
                marginBottom: "100px"
            },
            margin: {
                marginTop: "150px"
            }

        };

        const imgSrc = this.state.imageFile
        let body;

        if (this.state.id !== null) {
            body = (
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
                        <Col sm>
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
                        <Col sm>
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
                                    <p>Preview Story</p>
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
                        <Col sm style={style.columnKanan}>
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
        );
    }
}
export default newstory;
