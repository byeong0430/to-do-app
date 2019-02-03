import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, logger)
);