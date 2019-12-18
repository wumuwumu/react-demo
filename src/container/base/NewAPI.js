import React, { Component } from "react";
import { directive } from "@babel/types";

class NewApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wumu",
      age: 23
    };
  }

  changeName() {
    this.setState({
      name: this.state.name + "w",
      age: this.state.age + 1
    });
  }

  changeAge() {
    this.setState({
      age: this.state.age + 1
    });
  }

  render() {
    return (
      <div>
        <Children {...this.state}></Children>
        <button onClick={this.changeName.bind(this)}>改变名称</button>
        <button onClick={this.changeAge.bind(this)}>改变年龄</button>
      </div>
    );
  }
}

class Children extends Component {
  render() {
    console.log(this.props);
    return <div>{this.props.name}</div>;
  }
}

export default NewApi;
