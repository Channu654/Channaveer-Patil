import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import Todosinput from './Todosinput';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:8080/todos')
      .then((r) => r.json())
      .then((d) => setTodo(d));
  }, []);

  return (
    <div>
      Todos :{todos.length - 1}
      <div>
        <Todosinput />
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default Todos;
