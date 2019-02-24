import React, { Component } from 'react';
import './App.css';
import SayHello from './components/SayHello';

class App extends Component {
  state = {
    name: ''
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <SayHello
          name={name}
          onGetNewName={() => this.setState({
            name: prompt('Enter name') || ''
          })}
        />
      </div>
    );
  }
}

export default App;
