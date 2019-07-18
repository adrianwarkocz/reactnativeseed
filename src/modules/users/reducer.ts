import { UsersActionsTypes, dataType, UsersActions } from './types'

export interface UsersState {
  data: Array<dataType> | null;
  loading: boolean;
  error: boolean;
}

const defaultState: UsersState = {
  data: null,
  loading: false,
  error: false,
};

export const usersReducer = (state = defaultState, action: UsersActionsTypes): UsersState => {
  switch (action.type) {
    case UsersActions.USERS_GET_PENDING:
    case UsersActions.USERS_ADD_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UsersActions.USERS_GET_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case UsersActions.USERS_CLEAR:
      return {
        ...state,
        loading: false,
        error: false,
        data: null
      };
    case UsersActions.USERS_GET_FAILURE:
    case UsersActions.USERS_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case UsersActions.USERS_ADD_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};