import { combineReducers, legacy_createStore as createStore } from 'redux';

import { todosReducer } from './Redux/Todos/Reducer';
//4. store  > app.jsx

// const rootReducer = combineReducers({
//   counter: counterreducer,
//   todosReducer: todosReducer,
// });

const store = createStore(todosReducer);
console.log('store:', store);

export { store };
