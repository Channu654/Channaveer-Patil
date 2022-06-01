//4. action 
import { ADD_TODO ,REMOVE_TODO } from "./ActionType";

//action creator
export const addTodo=(payload)=>{
   return {
       type:ADD_TODO,
       payload
   }
}