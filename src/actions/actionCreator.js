import * as types from '../constants/actionTypes';

export const addProduct = product => ({
  type: types.ADD_PRODUCT, payload: { product },
});

export const deleteProduct = () => ({
  type: types.DELETE_PRODUCT,
});

export const deleteSearchList = () => ({
  type: types.DELETE_SEARCH_LIST,
});

export const addSearchListStart = keyword => ({
  type: types.ADD_SEARCH_LIST_START,
  payload: { keyword },
});

export const addSearchListSuccess = list => ({
  type: types.ADD_SEARCH_LIST_SUCCESS,
  payload: { list },
});

export const addSearchListFailure = error => ({
  type: types.ADD_SEARCH_LIST_FAILURE,
  payload: { error },
});
