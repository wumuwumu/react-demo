import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import simple from './simple'
import picture from './picture'
export class index extends Component {
  static propTypes = {};

  render() {
    let {match} = this.props;
    return (
      <div >
        <div>dajiahao</div>
        <Switch>
        <Route path={`${match.path}/simple`}  component={simple} />
        <Route path={`${match.path}/picture`}  component={picture} />
        </Switch>
      </div>
    );
  }
}

export default index;
