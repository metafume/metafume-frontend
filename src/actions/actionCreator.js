import * as types from '../constants/actionTypes';

export const addSearchList = list =>
  ({ type: types.ADD_SEARCH_LIST, payload: { list } });

export const deleteSearchList = () =>
  ({ type: types.DELETE_SEARCH_LIST });

export const addProduct = product =>
  ({ type: types.ADD_PRODUCT, payload: { product } });

export const deleteProduct = () =>
  ({ type: types.DELETE_PRODUCT });
