import { legacy_createStore } from 'redux';
//. store which recievs action from reducer
import { reducer } from './Reducer';

export const store = legacy_createStore(reducer);
console.log('store:', store);
