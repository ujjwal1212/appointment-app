import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from '../reducers';
import { AppActions } from '../constants/ActionTypes';

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState: any) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware as ThunkMiddleware<AppState, AppActions>),
  );

  return store;
}