import { UsersActionsTypes, UsersActions, dataType } from './types'

export const usersGetPending = (): UsersActionsTypes => {
  return {
    type: UsersActions.USERS_GET_PENDING,
  }
}

export const usersGetSucceeded = (payload: Array<dataType>): UsersActionsTypes => {
  return {
    type: UsersActions.USERS_GET_SUCCEEDED,
    payload: payload
  }
}

export const userGetFailure = (): UsersActionsTypes => {
  return {
    type: UsersActions.USERS_GET_FAILURE,
  }
}

export const usersAddPending = (): UsersActionsTypes => {
  return {
    type: UsersActions.USERS_ADD_PENDING,
  }
}

export const usersAddSucceeded = (payload: dataType): UsersActionsTypes => {
  return {
    type: UsersActions.USERS_ADD_SUCCEEDED,
    payload: payload
  }
}

export const userAddFailure = (): UsersActionsTypes => {
  return {
    type: UsersActions.USERS_ADD_FAILURE,
  }
}

export const userClear = (): UsersActionsTypes => {
  return {
    type: UsersActions.USERS_CLEAR,
  }
}