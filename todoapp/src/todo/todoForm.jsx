import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        type="text"
        placeholder="Adicione uma tarega"
        id="description"
        className="form-control"
        value={props.description}
        onChange={props.handleChange}
      />
    </Grid>

    <Grid cols="12 3 2">
      <IconButton style="primary" icon="plus" onClick={props.handleClick} />
    </Grid>
  </div>
);