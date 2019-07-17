
export enum UsersActionTypes {
  USERS_GET_PENDING = 'USERS_GET_PENDING',
  USERS_GET_SUCCEEDED = 'USERS_GET_SUCCEEDED',
  USERS_GET_FAILURE = 'USERS_GET_FAILURE',
  USERS_GET_CLEAR = 'USERS_GET_CLEAR',
  USERS_ADD_PENDING = 'USERS_ADD_PENDING',
  USERS_ADD_SUCCEEDED = 'USERS_ADD_SUCCEEDED',
  USERS_ADD_FAILURE = 'USERS_ADD_FAILURE',
}

export interface dataType { name: string, age: number }

interface usersGetPendingAction {
  type: typeof UsersActionTypes.USERS_GET_PENDING
}

interface usersGetSucceededAction {
  type: typeof UsersActionTypes.USERS_GET_SUCCEEDED
  payload: Array<dataType>,
}

interface usersGetFailureAction {
  type: typeof UsersActionTypes.USERS_GET_FAILURE
}

interface usersAddPendingAction {
  type: typeof UsersActionTypes.USERS_ADD_PENDING
}

interface usersAddSucceededAction {
  type: typeof UsersActionTypes.USERS_ADD_SUCCEEDED
}

interface usersAddFailureAction {
  type: typeof UsersActionTypes.USERS_ADD_FAILURE
}

interface usersGetClearAction {
  type: typeof UsersActionTypes.USERS_GET_CLEAR
}

export type UserActions = usersGetPendingAction | usersGetSucceededAction |
  usersGetFailureAction | usersGetClearAction | usersAddPendingAction | usersAddSucceededAction | usersAddFailureAction