import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import leaflet from "../container/leaflet";
import Page404 from "../container/common/Page404";

let routers = (
  <Router>
    <Switch>
      <Route path="/leaflet" component={leaflet} />
      <Route component={Page404} />
    </Switch>
  </Router>
);

export default routers;
