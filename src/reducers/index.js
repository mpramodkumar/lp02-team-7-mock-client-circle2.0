import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const root = combineReducers({
  router: routerReducer,
  loginReducer,
});

export default root;
