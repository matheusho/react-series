import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponentJSX.jsx';

ReactDOM.render(
  <ClassComponent initialValue={1} />,
  document.getElementById('app')
);