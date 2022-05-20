import React, { useState } from 'react';

export const Form = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  const formsubmit = (e) => {
    e.preventDefault();
    let payload = {
      id: Math.random(),
      title: input,
    };
    setList([payload, ...list]);
  };

  return (
    <div>
      <form action='' onSubmit={formsubmit}>
        <input type='text' onChange={handlechange} />
        <button>Add</button>
      </form>
    </div>
  );
};
