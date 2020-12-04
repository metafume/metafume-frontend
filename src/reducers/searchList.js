import * as types from '../constants/actionTypes';

const searchListReducer = (state = null, action) => {
  switch(action.type) {
    case types.ADD_SEARCH_LIST:
      return action.payload.list;
    case types.DELETE_SEARCH_LIST:
      return null;
    default:
      return state;
  }
};

export default searchListReducer;
