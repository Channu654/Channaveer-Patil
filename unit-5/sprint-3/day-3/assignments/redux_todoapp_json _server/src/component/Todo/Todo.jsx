import React from 'react';

const Todo = ({ id, value }) => {
  const handleDelet = async () => {
    let res = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
  };
  return (
    <div>
      <h1>{value}</h1>;<button onClick={handleDelet}>Delete</button>
    </div>
  );
};

export default Todo;
