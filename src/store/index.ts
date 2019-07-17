import { combineReducers, Reducer, createStore } from 'redux';
import { homeReducer, HomeState } from '../modules/home/reducer'
import { usersReducer, UsersState } from '../modules/users/reducer'

interface ApplicationState {
  homeReducer: HomeState;
  usersReducer: UsersState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  homeReducer,
  usersReducer
});

export const store = createStore(reducers)