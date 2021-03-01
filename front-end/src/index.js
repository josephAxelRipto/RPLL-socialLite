import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import login from "../src/view/component/login"
// import register from "../src/view/component/register"
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import App from "./App.js";

//const rootElement = document.getElementById("root");
   // ReactDOM.render(
    //  <Router>
      // <Switch>
    //    <Route exact path="/" component={register} />
     //   <Route path="/login" component={login} />
     // </Switch>
     // </Router>,
    //  rootElement
  //  );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

