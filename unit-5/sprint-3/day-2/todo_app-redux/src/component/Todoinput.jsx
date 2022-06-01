import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../Redux/Action';

const Todoinput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuidv4(),
    };
    const AddtodoAction = addTodo(payload);
    dispatch(AddtodoAction);
  };

  return (
    <div>
      <h3>AddTodo</h3>
      <input
        type='text'
        name=''
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='add something '
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export { Todoinput };
//1.useDispatch - its dispatches actions from reducer
