import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Simple from './Simple'
import Map from './Map'
export class Index extends Component {
  static propTypes = {};

  render() {
    let {match} = this.props;
    return (
      <div >
        <div>dajiahao</div>
        <Switch>
            <Route path={`${match.path}/simple`}  component={Simple} />
            <Route path={`${match.path}/map`}  component={Map} />
        </Switch>
      </div>
    );
  }
}

export default Index;
