import { all, call } from 'redux-saga/effects';

import searchListSagas from './searchList.saga';

export default function* saga() {
  yield all([call(searchListSagas)]);
}
