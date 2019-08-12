import { combineReducers, Reducer, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'
import { homeReducer } from '../modules/Home/reducer'
import { usersReducer } from '../modules/Users/reducer'
import { HomeState } from '../modules/Home/types';
import { UsersState } from '../modules/Users/types';

export interface ApplicationState {
  homeReducer: HomeState;
  usersReducer: UsersState;
}

const sagaMiddleware = createSagaMiddleware();

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  usersReducer,
  homeReducer
});

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;