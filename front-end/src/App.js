import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./view/pages/login.js";
import Register from "./view/pages/register.js";
import Home from "./view/component/home.js";
function App() {
  return (
    <BrowserRouter>
    <main>
      <Switch>
        <Route  path="/signup" component={Register} exact/>
        <Route  path="/login" component={Login} exact/>
        <Route  path="/home" component={Home} exact/>
      </Switch>
    </main>
</BrowserRouter>

  );
}

export default App;
