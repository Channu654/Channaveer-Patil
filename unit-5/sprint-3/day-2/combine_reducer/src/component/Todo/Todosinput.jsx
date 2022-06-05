import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Todosinput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
   
  useEffect=()=>{
 
    
  }

  return (
    <div>
      <input
        type='text'
        name=''
        id=''
        value={text}
        placeholder='enter todos'
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </div>
  );
};

export default Todosinput;
