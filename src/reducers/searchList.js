import * as types from '../constants/actionTypes';

const initialState = {
  list: null,
  loading: false,
  error: null,
};

const searchListReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_SEARCH_LIST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        loading: false,
        error: null,
      };
    case types.ADD_SEARCH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.DELETE_SEARCH_LIST:
      return {
        ...state,
        list: null,
      };
    default:
      return state;
  }
};

export default searchListReducer;
