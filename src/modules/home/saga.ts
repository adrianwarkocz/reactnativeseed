import { all, takeLatest, call, put } from 'redux-saga/effects';
import { HomeActions } from './types'
import { homeFailure, homeSucceeded, homeClear } from './actions'
import { getHomeData } from '../../services/homeService'

function* executeGetHomeData() {
  try {
    const data = yield call(getHomeData);
    console.log(getHomeData)
    yield put(homeSucceeded(data));
  } catch (error) {
    yield put(homeFailure());
  }
}

function* executeClearHomeData() {
  yield put(homeClear())
}

export default function* homeSaga() {
  yield all([
    takeLatest(HomeActions.HOME_PENDING, executeGetHomeData),
    takeLatest(HomeActions.HOME_CLEAR, executeClearHomeData)
  ]);
}
