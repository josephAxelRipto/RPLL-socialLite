import React, { useEffect } from 'react'
import { Container, Modal, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

function ChatComponent(props){
    const{id} = props.match.params

    console.log(id)
}
export default withRouter(ChatComponent);