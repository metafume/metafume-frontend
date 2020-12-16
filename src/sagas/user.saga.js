import { takeLatest, put, all, call } from 'redux-saga/effects';

import * as actions from '../reducers/user';
import api from '../utils/api';

function* login({ payload }) {
  try {
    const { token } = payload;
    let user = null;

    if (token) user = yield api.tokenLogin(token);
    else user = yield api.googleLogin();

    yield put(actions.loginSuccess(user));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* watchLoginStart() {
  yield takeLatest(actions.loginStart.type, login);
}

export default function* userSagas() {
  yield all([
    call(watchLoginStart),
  ]);
}
