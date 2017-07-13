import React from 'react';

export default (props) => (
  <input
    {...props.input}
    type={props.type}
    className="form-control"
    placeholder={props.placeholder}
    readOnly={props.readOnly}
  />
);
