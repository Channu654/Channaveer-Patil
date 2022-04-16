import React from "react";
import styles from './todo.module.css'
//7.todo component is simply showing data from here on dom 
const Todo = ({todo}) => {
  return <div className={todo.completed ?styles.lineThrough: ""}>
    
      {todo.value}</div>;
};

export  {Todo};

