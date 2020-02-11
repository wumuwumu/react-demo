import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TUI from "./TUI";
export class Index extends Component {
  static propTypes = {};

  render() {
    let { match } = this.props;
    return (
      <div>
        <div>日历</div>
        <Switch>
          <Route path={`${match.path}/tui`} component={TUI} />
        </Switch>
      </div>
    );
  }
}

export default Index;
