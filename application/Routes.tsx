import * as React from "react";
import {Route} from "react-router";
import {Application} from "./pages/Application";

export const routes = (
  <Route path="/" component={Application} >
  </Route>
);