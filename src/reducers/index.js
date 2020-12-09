import { combineReducers } from 'redux';

import userReducer from './user';
import searchListReducer from './searchList';

export default combineReducers({
  user: userReducer,
  searchList: searchListReducer,
});
