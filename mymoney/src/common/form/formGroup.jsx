import React from 'react';

import Grid from '../layouts/grid';

export default (props) => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props.input}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
      />
    </div>
  </Grid>
);