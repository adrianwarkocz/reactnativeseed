import { UsersActionTypes, dataType, UserActions } from './actions'

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

export const usersReducer = (state = defaultState, action: UserActions): UsersState => {
  switch (action.type) {
    case UsersActionTypes.USERS_GET_PENDING:
    case UsersActionTypes.USERS_ADD_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UsersActionTypes.USERS_GET_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case UsersActionTypes.USERS_GET_CLEAR:
      return {
        ...state,
        loading: false,
        error: false,
        data: null
      };
    case UsersActionTypes.USERS_GET_FAILURE:
    case UsersActionTypes.USERS_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case UsersActionTypes.USERS_ADD_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};