export enum HomeActionTypes {
  HOME_PENDING = 'HOME_PENDING',
  HOME_SUCCEEDED = 'HOME_SUCCEEDED',
  HOME_CLEAR = 'HOME_CLEAR',
  HOME_FAILURE = 'HOME_FAILURE'
}

export interface dataType { name: string, age: number }

interface homePendingAction {
  type: typeof HomeActionTypes.HOME_PENDING
}

interface homeSucceededAction {
  type: typeof HomeActionTypes.HOME_SUCCEEDED
  payload: dataType,
}

interface homeClearAction {
  type: typeof HomeActionTypes.HOME_CLEAR
}

interface homeFailureAction {
  type: typeof HomeActionTypes.HOME_FAILURE
}

export type HomeActions = homePendingAction | homeSucceededAction | homeClearAction | homeFailureAction