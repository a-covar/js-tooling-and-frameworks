import React from 'react';
import { render } from 'react-dom';
// import style
import css from './styles/style.styl';
// import components
import App from './components/App';
import Grid from './components/Grid';
import Single from './components/Single';
// import react react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Grid}></IndexRoute>
        <Route path="view/:id" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'));
