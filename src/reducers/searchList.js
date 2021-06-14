import { createSlice } from '@reduxjs/toolkit';

const ADD_SEARCH_LIST_START = 'ADD_SEARCH_LIST_START';
const ADD_SEARCH_LIST_SUCCESS = 'ADD_SEARCH_LIST_SUCCESS';
const ADD_SEARCH_LIST_FAILURE = 'ADD_SEARCH_LIST_FAILURE';
const DELETE_SEARCH_LIST = 'DELETE_SEARCH_LIST';

const initialState = {
  list: null,
  loading: false,
  error: null,
};

const reducers = {
  [ADD_SEARCH_LIST_START]: {
    reducer: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    prepare: keyword => ({ payload: { keyword } }),
  },
  [ADD_SEARCH_LIST_SUCCESS]: {
    reducer: (state, action) => ({
      ...state,
      list: action.payload.list,
      loading: false,
      error: null,
    }),
    prepare: list => ({ payload: { list } }),
  },
  [ADD_SEARCH_LIST_FAILURE]: {
    reducer: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    prepare: error => ({ payload: { error } }),
  },
  [DELETE_SEARCH_LIST]: {
    reducer: state => ({ ...state, list: null }),
  },
};

const searchListSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers,
});

export const deleteSearchList = searchListSlice.actions[DELETE_SEARCH_LIST];
export const addSearchListStart = searchListSlice.actions[ADD_SEARCH_LIST_START];
export const addSearchListSuccess = searchListSlice.actions[ADD_SEARCH_LIST_SUCCESS];
export const addSearchListFailure = searchListSlice.actions[ADD_SEARCH_LIST_FAILURE];

export default searchListSlice.reducer;
