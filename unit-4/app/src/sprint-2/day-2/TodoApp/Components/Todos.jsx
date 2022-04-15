import React, { useState } from 'react';
import {AddTodo} from './AddTodo';
import { Todo } from './Todo';

//4.created obj used as props here 
const Todos = () => {
    {/*removed todos here  */}
    const [todos,setTodos]=useState([])
    const onAdd=(newTodo)=>{
        // 11. whenever clicking onAdd changing from todos to setdods
        setTodos([
            ...todos,
            {
                id:todos.length+1,
                value:newTodo,
                completed:false,
            }
        ]) 
       }

  return <div>
      <AddTodo onAdd={onAdd}/>
{/*5. mapping all props to show on dom*/}
{todos.map((todo) =>(
<Todo key={todo.id} todo={todo}/>))}
  </div>;
  {/*6.sending toods props to todo component */}
};

export { Todos };
//1. creating 3 components Todos,Todo,Addtodo,
