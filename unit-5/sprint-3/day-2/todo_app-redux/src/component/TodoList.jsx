import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  // byusing useSelector we will extract statet from reducer its always returns call back function

  const todos = useSelector((state) => state.todos);
  console.log('todos:', todos);
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export { TodoList };
