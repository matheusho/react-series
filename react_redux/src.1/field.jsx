import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldActions';

class Field extends Component {

  render() {
    return (
      <div>
        <label>{this.props.value}</label>
        <br />
        <input
          value={this.props.value}
          onChange={this.props.changeValue}
        />
      </div>
    );
  }
}

function mapStateToprops(state) {
  return { value: state.field.value };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToprops, mapDispatchToProps)(Field);