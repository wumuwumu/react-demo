import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewAPi from './NewAPI'


export class Index extends Component {
  
  render() {
    let { match } = this.props;
    return (
      <div>
        <Route path={`${match.path}/newapi`} component={NewAPi} />
      </div>
    );
  }
}

export default Index
