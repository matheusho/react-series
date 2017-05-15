import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
  }

  sum(delta) {
    let result = this.state.value + delta;
    this.setState({ value: result });
  }

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <h2>{this.props.value}</h2>
        <button onClick={() => this.sum(1)}>+1</button>
        <button onClick={() => this.sum(-1)}>-1</button>
      </div>
    );
  }
}