import { all, takeLatest, call, put } from 'redux-saga/effects';
import { HomeActions } from '../types'
import { homeFailure, homeSucceeded } from './actions'
import { getHomeData } from '../../../services/homeService'

function* executeGetHomeData() {
  try {
    const data = yield call(getHomeData);
    yield put(homeSucceeded(data));
  } catch (error) {
    yield put(homeFailure());
  }
}

export default function* homeSaga() {
  yield all([
    takeLatest(HomeActions.HOME_PENDING, executeGetHomeData),
  ]);
}
