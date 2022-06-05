import {  applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { dataReducer, reducer } from "./reducer";
import thunk from 'redux-thunk'
const rootReduser=combineReducers({
  token:dataReducer

})
// console.log(dataReducer)
   
// const logger = (store) => (next) => (action) => {
//   console.log(' dispatching the action ', action);

//   if(typeof action==="function")
//   {
//     return action(store.dispatch)
//   }
//   return next(action);
// }

export const store=createStore(rootReduser,applyMiddleware(thunk))