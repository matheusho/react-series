import React from "react";

interface SayHelloProps {
  name: string;
  onGetNewName: () => void;
}

interface SayHelloState {
  count: number;
}

export default class SayHello extends React.Component<SayHelloProps,SayHelloState> {
  state = {
    count: 0
  };

  render() {
    const { onGetNewName, name } = this.props;
    const { count } = this.state;

    return (
      <div>
        <p>Hello, {name}!</p>
        <button onClick={() => onGetNewName()}>Enter new name</button>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: (count + 1) })}>
          Click
        </button>
      </div>
    )
  }
}
