import { fork, all } from 'redux-saga/effects';
import homeSaga from '../modules/Home/saga';
// import usersSaga from '../modules/Users/saga';

export default function* root() {
  yield all([
    // fork(usersSaga),
    fork(homeSaga)
  ]);
}