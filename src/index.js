import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBarMain from "./component/navbar";
import Routes from "./component/Routes/Routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./component/css/custom.css";

ReactDOM.render(
  <Router>
    <NavBarMain />
    <Routes />
  </Router>,
  document.getElementById("root")
);
