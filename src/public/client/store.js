// Redux store
import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import axios from 'axios';

// import reducer
import rootReducer from './reducers/index';

const defaultState = {
  items: [],
  count: 0
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f);
const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
export const history = syncHistoryWithStore(browserHistory, store);


const API = 'http://localhost:3000/api/items'
// LOADING FIST 5
store.dispatch((dispatch) => {
  axios.get(`${API}?q=five`).then((response) => {
    dispatch({type:'SET_ITEMS', payload: response.data});
  })
  .catch((err) => {
    dispatch({type:'FETCH_ERR', payload: err});
  });
});

export default store;
