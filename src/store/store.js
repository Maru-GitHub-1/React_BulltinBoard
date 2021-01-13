import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { bbReducer } from '../reducers/channelReducer';

// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];


export const store = reduxCreateStore(combineReducers(
  {
    bb: bbReducer
  },
  composeEnhancers(
    applyMiddleware(...middleware, logger)
  )
))