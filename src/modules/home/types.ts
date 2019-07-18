export enum HomeActions {
  HOME_PENDING = 'HOME_PENDING',
  HOME_SUCCEEDED = 'HOME_SUCCEEDED',
  HOME_CLEAR = 'HOME_CLEAR',
  HOME_FAILURE = 'HOME_FAILURE'
}

export interface HomeState {
  data: dataType | null;
  loading: boolean;
  error: boolean;
}

export interface dataType { name: string, age: number }

interface homePendingAction {
  type: typeof HomeActions.HOME_PENDING
}

interface homeSucceededAction {
  type: typeof HomeActions.HOME_SUCCEEDED
  payload: dataType,
}

interface homeClearAction {
  type: typeof HomeActions.HOME_CLEAR
}

interface homeFailureAction {
  type: typeof HomeActions.HOME_FAILURE
}

export type HomeActionTypes = homePendingAction | homeSucceededAction | homeClearAction | homeFailureAction