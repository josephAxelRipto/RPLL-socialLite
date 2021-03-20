import {
  InputGroup,
  FormControl,
  Button,
  Navbar,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";
import Search from "../asset/search-24px.svg";

const navbarComponent = () => {
    const style = {
      logo: {
        marginTop: "20px",
        width: "120px",
        height: "100px",
      },
      search: {
        marginTop: "40px",
        marginLeft: "-220px",
      },
      formSearch: {
        borderRadius: "30px",
        width: "270px",
      },
      buttonLogin: {
        width: "140px",
        marginRight: "20px",
      },
      buttonSignup: {
        width: "140px",
        marginRight: "50px"
      },
      buttonSearch: {
        width: "30px",
        height: "30px",
      },
      groupFromSearch: {
        marginLeft: "100px",
      },
      navbar: {
        height: "7em",
      },
      brand: {
        marginLeft: "60px"
      }
    };
    return (
      <Navbar bg="light" expand="lg" style={style.navbar} fixed="top">
          <Navbar.Brand href="/" style={style.brand}>
            <img
              src={Logo}
              style={style.logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <InputGroup
              className="justify-content-md-center"
              style={style.groupFromSearch}
              xs lg = "6"
            >
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  name="search"
                  style={style.formSearch}
                  autoComplete="off"
                />
                <InputGroup.Prepend>
                  <Button variant="black">
                    <img
                      src={Search}
                      alt="search"
                      style={style.buttonSearch}
                    ></img>
                  </Button>
                </InputGroup.Prepend>
              </Form>
            </InputGroup>
            <InputGroup className="justify-content-md-end">
              <Link to="/login">
                <Button
                  variant="secondary"
                  type="submit"
                  size=""
                  style={style.buttonLogin}
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="dark"
                  type="submit"
                  size=""
                  style={style.buttonSignup}
                >
                  Sign Up
                </Button>
              </Link>
            </InputGroup>
          </Navbar.Collapse>
      </Navbar>
    );
  }
export default navbarComponent;
