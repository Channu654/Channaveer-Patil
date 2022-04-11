import { useState } from "react";

function Todo (){
    const[task,setTask] =useState("");
    const [todo,setTodo]= useState([]);
    // pushing a every task into this array from line number 14
    const handleChange =(e)=>{
        console.log("changing task",e.target.value)
        // sethere
        setTask(e.target.value)
    }
    // to Add
    const handleClick =()=>{
      setTodo([...todo,task])
      
    }
    console.log(todo,"todo")
    return(
        <>
        <h1>Todo</h1>
        <input type={"text"} placeholder="Enter task" value={task} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        {/*mapping & rendering todo into the dom */}
        {todo.map((item)=>{
            return <h1> {item}</h1>
        })}

        
        </>
    )
}
export {Todo}