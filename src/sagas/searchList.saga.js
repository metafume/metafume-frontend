import { takeLatest, put, all, call, delay } from 'redux-saga/effects';

import * as types from '../constants/actionTypes';
import * as actions from '../actions/actionCreator';

import api from '../utils/api';

function* searchKeyword({ payload }) {
  try {
    const { keyword } = payload;
    const list = yield api.searchKeyword(keyword);
    yield delay(2000);
    yield put(actions.addSearchListSuccess(list));
  } catch (err) {
    yield put(actions.addSearchListFailure(err));
  }
}

function* watchSearchKeywordStart() {
  yield takeLatest(types.ADD_SEARCH_LIST_START, searchKeyword);
}

export default function* searchListSagas() {
  yield all([
    call(watchSearchKeywordStart),
  ]);
}
