import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import items from './items';
import count from './count';
const rootReducer = combineReducers({
  items,
  count,
  routing: routerReducer
});

export default rootReducer;
