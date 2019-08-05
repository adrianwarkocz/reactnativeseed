import { combineReducers, Reducer, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { homeReducer } from '../modules/home/reducer'
import { usersReducer } from '../modules/users/reducer'
import { HomeState } from '../modules/home/types';
import { UsersState } from '../modules/users/types';

interface ApplicationState {
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