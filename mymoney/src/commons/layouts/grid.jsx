import React, { Component } from 'react';

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let gridClasses = ['col-xs-', 'col-sm-', 'col-md-', 'col-lg-'];
    let classes = cols.map((value, i) => value ? `${gridClasses[i]}${value}` : '');

    return classes.join(' ').trim();
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12);
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}