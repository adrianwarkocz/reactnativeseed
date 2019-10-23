import { fork, all } from 'redux-saga/effects';
import homeSaga from '../modules/Home/store/saga';
import usersSaga from '../modules/Users/store/saga';

export default function* root() {
  yield all([
    fork(usersSaga),
    fork(homeSaga)
  ]);
}