import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import Close from "../asset/close.svg"

function ModalForgotPassword(props) {
    const style = {
        photo: {
            width: "290px",
            height: "300px"
        },
        icon: {
            width: "50px",
            heigth: "50px",
            borderRadius: "20px",
        },
        sticky: {
            height: '310px',
            width: "440px",
            overflow: 'scroll',
            position: "fixed"
        },
        marginToast: {
            marginLeft: "30px",
            marginBottom: "10px"
        },
        form: {
            borderRadius: "30px",
            marginRight: "40px"
        },
        btn_send: {
            width: "45px",
            height: "45px",
            borderRadius: "20px",
            marginLeft: "10px"
        },
        btn_close: {
            borderRadius: "20px",
        },
        rowComment: {
            marginTop: "10px",
            marginRight: "10px",
            marginLeft: "-80px"
        },
        icon_comment: {
            width: "45px",
            height: "45px",
            borderRadius: "20px",
        }

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className="show-grid" closeButton>
                <Container>
                </Container>
            </Modal.Body>
            <Modal.Footer >
                <Button variant="danger" onClick={props.onHide}><img src={Close} alt="close" style={style.btn_close}></img></Button>
            </Modal.Footer>

        </Modal>
    )
}
export default withRouter(ModalForgotPassword)