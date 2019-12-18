import React from "react";
import logo from "./logo.svg";
import "./App.css";
import routers from "./router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>echart</h1>
        <ul>
          <li>
            <Link to="/echart/simple">简单</Link>
          </li>
          <li>
            <Link to="/echart/map">地图</Link>
          </li>
        </ul>
        {routers}
      </div>
    </Router>
  );
}

export default App;
