import { all, takeLatest, call, put } from 'redux-saga/effects';
import { UsersActions } from '../types'
import { userGetFailure, usersGetSucceeded } from './actions'
import { getHomeData } from '../../../services/homeService'

function* executeGetUsersData() {
  try {
    const data = yield call(getHomeData);
    yield put(usersGetSucceeded(data));
  } catch (error) {
    yield put(userGetFailure());
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(UsersActions.USERS_GET_PENDING, executeGetUsersData),
  ]);
}