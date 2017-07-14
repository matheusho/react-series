import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import AuthOrApp from './main/authOrApp';
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = applyMiddleware(multi, thunk, promise);
const store = middlewares(createStore)(reducers, devTools);

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <AuthOrApp />
    </HashRouter>
  </Provider>
), document.getElementById('app'));
