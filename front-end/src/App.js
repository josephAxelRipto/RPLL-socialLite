import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./view/pages/login";
import Register from "./view/pages/register";
import Home from "./view/pages/home";
import EditProfil from "./view/pages/editprofil";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/signup" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
            <Route path="/editprofile" component={EditProfil} exact />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
