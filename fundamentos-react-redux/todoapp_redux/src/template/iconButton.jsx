import React from 'react';
import ConditionalRender from '../template/conditionalRender';

export default props => (
  <ConditionalRender render={!props.hide}>
    <button
      className={`btn btn-${props.style}`}
      onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  </ConditionalRender>
)