import { all, call } from 'redux-saga/effects';

import searchListSagas from './searchList.saga';
import userSagas from './user.saga';

export default function* saga() {
  yield all([call(searchListSagas), call(userSagas)]);
}
