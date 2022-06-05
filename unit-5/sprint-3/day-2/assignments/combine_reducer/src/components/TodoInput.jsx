import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetch, postTodo } from "../Redux/Todos/action";

const TodoInput = () => {
  const [text, setText] = useState(null);
  const dispatch = useDispatch();

  
  const handleSubmit = () => {
    postTodo({dispatch, text}).then(() => fetch(dispatch))
  
   
  };
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="write here"
      />
      <input onClick={handleSubmit} type="submit" />
    </div>
  );
};

export default TodoInput;
