import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Addtodo } from '../../Redux/Todos/Action';

const Todosinput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuidv4(),
    };
    // dispatch
    const AddtodoAction = Addtodo(payload);
    dispatch(AddtodoAction);
  };

  return (
    <div>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export { Todosinput };
