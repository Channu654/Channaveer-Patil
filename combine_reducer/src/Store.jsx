import { combineReducers, legacy_createStore as createStore } from 'redux';
import { counterreducer } from './Redux/counter/Reducer';
import { todosReducer } from './Redux/Todos/Reducer';
//4. store  > app.jsx

// const inistate = { count: 0 };

const rootReducer = combineReducers({
  counter: counterreducer,
  todosReducer: todosReducer,
});

const store = createStore(rootReducer);


export { store };
