import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponentJSX.jsx';

ReactDOM.render(
  <ClassComponent label="Contador" initialValue={10} />,
  document.getElementById('app')
);