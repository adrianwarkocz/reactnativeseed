
export enum UsersActions {
  USERS_GET_PENDING = 'USERS_GET_PENDING',
  USERS_GET_SUCCEEDED = 'USERS_GET_SUCCEEDED',
  USERS_GET_FAILURE = 'USERS_GET_FAILURE',
  USERS_CLEAR = 'USERS_CLEAR',
  USERS_ADD_PENDING = 'USERS_ADD_PENDING',
  USERS_ADD_SUCCEEDED = 'USERS_ADD_SUCCEEDED',
  USERS_ADD_FAILURE = 'USERS_ADD_FAILURE',
}

export interface UsersState {
  data: Array<dataType> | null;
  loading: boolean;
  error: boolean;
}

export interface dataType { name: string, age: number }

interface usersGetPendingAction {
  type: typeof UsersActions.USERS_GET_PENDING
}

interface usersGetSucceededAction {
  type: typeof UsersActions.USERS_GET_SUCCEEDED
  payload: Array<dataType>,
}

interface usersGetFailureAction {
  type: typeof UsersActions.USERS_GET_FAILURE
}

interface usersAddPendingAction {
  type: typeof UsersActions.USERS_ADD_PENDING,
  name: string
}

interface usersAddSucceededAction {
  type: typeof UsersActions.USERS_ADD_SUCCEEDED,
  payload: dataType
}

interface usersAddFailureAction {
  type: typeof UsersActions.USERS_ADD_FAILURE
}

interface usersClearAction {
  type: typeof UsersActions.USERS_CLEAR
}

export type UsersActionsTypes = usersGetPendingAction | usersGetSucceededAction |
  usersGetFailureAction | usersClearAction | usersAddPendingAction | usersAddSucceededAction | usersAddFailureAction