
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetch } from '../Redux/Todos/action'

const TodoList = () => {
  const todos=useSelector(store=>store.todos.todos)
  const dispatch = useDispatch()

  useEffect(()=>{
    fetch(dispatch)
  },[])


  return (
    <div>
      <h6>Your Todo is here....</h6>
      {todos?.map((item)=>
        <h5 key={item.id}>{item.title}</h5>
      )}
    </div>
  )
}

export default TodoList