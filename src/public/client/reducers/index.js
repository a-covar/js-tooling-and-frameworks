import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import items from './items';

const rootReducer = combineReducers({
  items,
  routing: routerReducer
});

export default rootReducer;
