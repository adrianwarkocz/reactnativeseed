import { HomeActionTypes, HomeActions, dataType } from '../types'

export const getHomeData = (): HomeActionTypes => {
  return {
    type: HomeActions.HOME_PENDING,
  }
}

export const homeSucceeded = (payload: dataType): HomeActionTypes => {
  return {
    type: HomeActions.HOME_SUCCEEDED,
    payload: payload
  }
}

export const homeFailure = (): HomeActionTypes => {
  return {
    type: HomeActions.HOME_FAILURE,
  }
}

export const homeClear = (): HomeActionTypes => {
  return {
    type: HomeActions.HOME_CLEAR,
  }
}