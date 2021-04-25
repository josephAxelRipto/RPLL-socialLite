import React, { useEffect } from 'react'
import { Container, Modal, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
// import Close from "../asset/close.svg"

function ViewStoryComponent(props) {
    // const {id} = props.id
    // const [dataPost, setData] = useState([])

    useEffect(() => {

    })

    console.log(props.id)
    const style = {
        photo: {
            width: "500px",
            height: "500px"
        },
        btn_close: {
            borderRadius: "20px",
        },
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className="show-grid" closeButton>
                <Container>
                    <center>
                        <Row>
                            <Col>
                                {/* <img src={`data:image/jpeg;base64,${props.image}`} alt="post" style={style.photo}></img> */}
                                <img src={props.image} alt="post" style={style.photo}></img>
                            </Col>
                        </Row>
                    </center>
                </Container>
            </Modal.Body>
            {/* <Modal.Footer >
                <Button variant="danger" onClick={props.onHide}><img src={Close} alt="close" style={style.btn_close}></img></Button>
            </Modal.Footer> */}

        </Modal>
    )
}
export default withRouter(ViewStoryComponent);