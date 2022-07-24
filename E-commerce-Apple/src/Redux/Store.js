import { reducer } from './Reducer';
import {
  legacy_createStore as createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ reducer });
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
