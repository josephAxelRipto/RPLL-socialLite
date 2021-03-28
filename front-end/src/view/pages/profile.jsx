import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import NavbarComponent from "../components/navbarComponent";

class Profile extends Component {
    render (){
        return (
            <main>
                <switch>
                    <NavbarComponent />
                </switch>
            </main>
        );
    }
}
export default Profile;