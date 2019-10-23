import { HomeActionTypes, HomeActions, HomeState } from '../types'

const defaultState: HomeState = {
  data: null,
  loading: false,
  error: false,
};

export const homeReducer = (state = defaultState, action: HomeActionTypes): HomeState => {
  switch (action.type) {
    case HomeActions.HOME_PENDING:
      return {
        ...state,
        loading: true,
      };
    case HomeActions.HOME_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case HomeActions.HOME_CLEAR:
      return {
        ...state,
        loading: false,
        error: false
      };
    case HomeActions.HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};