import { combineReducers } from 'redux';

import userReducer from './user';
import productReducer from './product';
import searchListReducer from './searchList';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  searchList: searchListReducer,
});
