import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as actions from '../reducers/searchList';

import api from '../utils/api';

function* searchKeyword({ payload }) {
  try {
    const { keyword } = payload;
    const list = yield api.searchKeyword(keyword);
    yield put(actions.addSearchListSuccess(list));
  } catch (err) {
    yield put(actions.addSearchListFailure(err));
  }
}

function* watchSearchKeywordStart() {
  yield takeLatest(actions.addSearchListStart.type, searchKeyword);
}

export default function* searchListSagas() {
  yield all([
    call(watchSearchKeywordStart),
  ]);
}
