import { HomeActionTypes, dataType, HomeActions } from './actions'

export interface HomeState {
  data: dataType | null;
  loading: boolean;
  error: boolean;
}

const defaultState: HomeState = {
  data: null,
  loading: false,
  error: false,
};

export const homeReducer = (state = defaultState, action: HomeActions): HomeState => {
  switch (action.type) {
    case HomeActionTypes.HOME_PENDING:
      return {
        ...state,
        loading: true,
      };
    case HomeActionTypes.HOME_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case HomeActionTypes.HOME_CLEAR:
      return {
        ...state,
        loading: false,
        error: false
      };
    case HomeActionTypes.HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};