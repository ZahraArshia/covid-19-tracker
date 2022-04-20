import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './modules/country';

const reducer = combineReducers({
  countriesReducer,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default configureStore;
