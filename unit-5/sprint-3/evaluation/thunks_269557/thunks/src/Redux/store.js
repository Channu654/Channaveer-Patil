import {  applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import thunk from 'redux-thunk'
import { PostReducer } from "./app/reducer";
import { LoginReducer } from "./auth/reducer";
const rootReduser=combineReducers({
  login:LoginReducer,
  Postdata:PostReducer

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