import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, browserHistory} from "react-router";
import {routes} from "./Routes";


ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.querySelector("#root"));