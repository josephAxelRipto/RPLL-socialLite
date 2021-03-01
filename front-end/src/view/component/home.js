import React, { Component } from "react";
import {  Form, Container, Row, Col, FormControl , Button} from 'react-bootstrap';
import Logo from "../asset/logo.png";
import Line from "../asset/line.png";
import HomeLogo from "../asset/home.png";
import Photo1 from "../asset/model1.jpeg";
import BookmarkLogo from "../asset/mark.png";
import LoveLogo from "../asset/love.png";
import CommentLogo from "../asset/comment.png";

class Home extends Component {
    render() {
        const style_logo = {
            marginTop: "30px"
        };
        const margin_search = {
            marginLeft: "150px",
            marginTop : "50px",
            borderRadius : "30px",
            width :'270px'
        };
        const nav_but1 = {
            marginTop : "50px",
            marginLeft: "105px",
            width : "140px",
            backgroundColor : "black"
        };
        const nav_but2 = {
            marginTop : "50px",
            marginLeft : "5px",
            width : "140px"
        };
        const line = {
            marginTop : "-140px",
            marginLeft : "100px"
        };
        const homelogo = {
            marginTop: "-190px",
            width : "30px",
            height : "30px"
        };

        const social_story ={
            width :"280px",
            marginLeft:"20px"
        };
        const content_page = {
            width : "600px",
            marginLeft:"280px",
            marginTop:"-400px"
        };
        const suggest_page = {
            width :"180px",
            marginLeft :"770px",
            marginTop:"-1200px" 
        };
        const user_logo = {
            borderRadius : "55px",
            width : "50px",
            height :"50px",
            marginTop:"30px"
        };
        const skip_padd = {
            marginTop: "50px"
        };
        const content_user_logo ={
            borderRadius : "55px",
            width : "50px",
            height :"50px"
        };
        const suggest_user_logo ={
            borderRadius : "55px",
            width : "50px",
            height :"50px",
            marginTop:"15px"
        };
        const content_user = {
            width : "300px",
            height :"390px",
            marginLeft:"70px"
        };
        const love_icon = {
            width : "40px",
            marginTop:"-250px",
            marginLeft:"372px"
        };
        const comment_icon = {
            width : "30px",
            marginTop:"-65px",
            marginLeft:"379px"
        };
        const bookmark_icon ={
            width : "25px",
            marginTop:"-365px",
            marginLeft:"4px"
        };
        const follow_button = {
            marginLeft:"170px",
            backgroundColor:"white",
            color:"gray"
        };
        return (
            <Container>
                <Row>
                    <Col>
                        <Form inline>
                            <img src={Logo} className="logo" style={style_logo} alt="Logo" width="120px" height="100px" />
                            <FormControl type="text" placeholder ="Search" className ="" style={margin_search}/>
                            <Button variant="secondary" type="submit" size="" style={nav_but1}>
                                Login
                            </Button>
                            <Button variant="secondary" type="submit" size="" style={nav_but2}>
                                Sign Up
                            </Button>
                            <img src={Line} className="line" alt="Line" style={line}/>
                        </Form>
                        <div class="social_story" style={social_story}>
                            <img src={HomeLogo} className="line" alt="Line" style={homelogo}/>
                            <Button variant="" style ={{marginTop:"-190px" , }} >Home </Button>
                            <h5 style={{marginTop : "-50px",marginLeft:"30px",color:"gray"}}>SOCIAL STORY</h5>
                            <img src={Photo1} className="line" alt="Line" style={user_logo}/>
                            <Button variant="" style ={{marginTop:"20px"}} >Jane Lopinaz </Button>
                            
                            <br></br><img src={Photo1} className="line" alt="Line" style={user_logo}/>
                            <Button variant="" style ={{marginTop:"20px"}} >Lopi Sup </Button>
                            
                            <br></br><img src={Photo1} className="line" alt="Line" style={user_logo}/>
                            <Button variant="" style ={{marginTop:"20px"}} >Franks Kurt </Button>
                            
                            <br></br><img src={Photo1} className="line" alt="Line" style={user_logo}/>
                            <Button variant="" style ={{marginTop:"20px"}} >Doplino Mira </Button>
                        </div>

                        <div class = "content" style={content_page}>
                            <img src={Photo1} className="line" alt="Line" style={content_user_logo}/>
                            <Button variant="" style ={{marginLeft:"10px",fontWeight:"700"}} >Jane Lopinaz </Button>
                            <Button variant="secondary" type="submit" size="" style={follow_button}>FOLLOW</Button>
                            <br></br>
                            <p style={{marginTop:"7px",marginLeft:"70px"}}>Flawless make a beauty ...</p>
                            <img src={Photo1} className="line" alt="Line" style={content_user}/>
                            <img src={BookmarkLogo} className="line" alt="Line" style={bookmark_icon}/>
                            <br></br>
                            <img src={LoveLogo} className="line" alt="Line" style={love_icon}/>
                            <br></br>
                            <p style={{marginLeft:"380px",marginTop:"-119px"}}>899.1K</p>
                            <br></br>
                            <img src={CommentLogo} className="line" alt="Line" style={comment_icon}/>
                            <br></br>
                            <p style={{marginLeft:"380px",marginTop:"-25px"}}>20.1K</p>
                            <br></br>

                            <p style = {skip_padd}></p>

                            <img src={Photo1} className="line" alt="Line" style={content_user_logo}/>
                            <Button variant="" style ={{marginLeft:"10px",fontWeight:"700"}} >Nami Lopinaz </Button>
                            <Button variant="secondary" type="submit" size="" style={follow_button}>FOLLOW</Button>
                            <br></br>
                            <p style={{marginTop:"7px",marginLeft:"70px"}}>Kimberly so lit ...</p>
                            <img src={Photo1} className="line" alt="Line" style={content_user}/>
                            <img src={BookmarkLogo} className="line" alt="Line" style={{width : "25px",marginTop:"-365px",marginLeft:"4px"}}/>
                            <br></br>
                            <img src={LoveLogo} className="line" alt="Line" style={love_icon}/>
                            <br></br>
                            <p style={{marginLeft:"380px",marginTop:"-119px"}}>899.1K</p>
                            <br></br>
                            <img src={CommentLogo} className="line" alt="Line" style={comment_icon}/>
                            <br></br>
                            <p style={{marginLeft:"380px",marginTop:"-25px"}}>20.1K</p>
                            <br></br>

                            <p style = {skip_padd}></p>
                        </div>
                        <div class="suggest" style={suggest_page}>
                        <p>Suggest Account</p><br></br>
                        <img src={Photo1} className="line" alt="Line" style={suggest_user_logo}/>
                        <Button variant="">Jane Lopinaz </Button><br></br>
                        <img src={Photo1} className="line" alt="Line" style={suggest_user_logo}/>
                        <Button variant="">Kimberly Jane </Button><br></br>
                        <img src={Photo1} className="line" alt="Line" style={suggest_user_logo}/>
                        <Button variant="">Lorens Voile </Button><br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;