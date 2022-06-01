import { legacy_createStore as createStore } from 'redux';
import { reducer } from '../Reducers/Reducer';
//4. store  > app.jsx
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
