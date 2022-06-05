import { legacy_createStore as createStore,combineReducers } from "redux";
import { countReducer } from "./Counter/reducer";
import { todoReducer } from "./Todos/reducer";
const rootReducer=combineReducers({
    count:countReducer,
    todos:todoReducer
})
export const store = createStore(rootReducer);


