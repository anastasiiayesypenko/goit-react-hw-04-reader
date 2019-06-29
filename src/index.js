import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './container/App';

ReactDOM.render(
  <HashRouter basename="/">
    <Route component={App} />{' '}
  </HashRouter>,
  document.getElementById('root'),
);
