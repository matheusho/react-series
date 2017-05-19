import React from 'react';

export default props => {
  if (props.render) {
    return props.children;
  }
  return false;
};