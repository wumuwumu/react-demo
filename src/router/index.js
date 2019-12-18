import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import leaflet from "../container/leaflet";
import Page404 from "../container/common/Page404";
import Base from "../container/base/Index";
import EchaertPage from "../container/echart";
let routers = (
  <Switch>
    <Route path="/base" component={Base} />
    <Route path="/leaflet" component={leaflet} />
    <Route path="/echart" component={EchaertPage} />
    <Route component={Page404} />
  </Switch>
);

export default routers;
