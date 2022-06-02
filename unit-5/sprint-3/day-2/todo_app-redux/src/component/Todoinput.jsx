import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Addtodo } from '../Redux/Action';

const Todoinput = () => {
  const [title, setTtile] = useState('');
  const dispatch = useSelector();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuidv4(),
    };
    const AddtodoAction = Addtodo(payload);
    dispatch(AddtodoAction);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='enter Todoss here '
        values={title}
        onChange={(e) => setTtile(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export { Todoinput };
