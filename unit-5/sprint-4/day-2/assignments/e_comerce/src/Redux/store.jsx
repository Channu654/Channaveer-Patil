import { createToastFn } from '@chakra-ui/react';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './Products/Reducer';

const rootReducer = combineReducers({ ecommerceData: reducer });

const composeEnhence = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(
  rootReducer,
  composeEnhence(applyMiddleware(thunk))
);
