import { reducer } from './Reducer';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(reducer);
console.log('store:', store);

export { store };
