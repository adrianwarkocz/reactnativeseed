import { fork, all } from 'redux-saga/effects';
import usersSaga from '../modules/users/usersSaga';

export default function* root() {
  yield all([
    fork(usersSaga),
  ]);
}