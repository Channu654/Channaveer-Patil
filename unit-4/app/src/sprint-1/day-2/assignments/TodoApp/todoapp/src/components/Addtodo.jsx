import React, { useState } from 'react';
//.9 onAdd function creaeting after clickin onAdd todo something
const AddTodo = ({ onAdd }) => {
  //11.after clicking onAdd state need to chnage
  const [newTodo, setNewTodo] = useState('');

  //8.input and button is craeted
  return (
    <div>
      {/*10.onchange function
         12. if u want to clear input field text means u have to update state like  value={newTodo}  */}

      <input
        type='text'
        placeholder='insert your todo here'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          let value = newTodo.trim();
          if (value) {
            onAdd(value);
            setNewTodo('');
          }
        }}>
        {' '}
        Add
      </button>
    </div>
  );
};

export { AddTodo };
