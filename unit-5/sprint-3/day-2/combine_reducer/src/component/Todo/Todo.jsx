import React, { useEffect } from 'react';
import Todosinput from './Todosinput';
import { TodoList } from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTodoRequest, gettodos } from '../../Redux/Todos/Action';
import { getTodoSuccess } from '../../Redux/Todos/Action';
import { getTodoFailure } from '../../Redux/Todos/Action';

const Todo = () => {
  const { loading } = useSelector((state) => state.todosReducer);
  console.log('loading:', loading);

  const dispatch = useDispatch();

  // fetching data
  useEffect(() => {
    fetch(dispatch);
  }, []);

  return (
    <div>
      <h2>ff</h2>
      <Todosinput />
      <br />
      <TodoList />
    </div>
  );
};

export default Todo;
