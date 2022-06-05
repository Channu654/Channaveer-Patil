import React from 'react'
import { useDispatch } from 'react-redux';
import { search } from '../store/actions';

export const GithubUser = () => {
    const [task, setTask] = React.useState("prabhuRV");
    const dispatch = useDispatch();
  
   
    const handleChange = (e) => {
      setTask(e.target.value);
    };
    const handleClick = () => {
        // console.log(task);
      search({
        task,
        dispatch,
      }).then(() => {
        // getTodos(dispatch);
      });
    };
  return (
    <div>
   

  
      <div id="inputdiv">
        <input
          id="input"
          type={"text"}
          name={task}
          onChange={handleChange}
          placeholder="Write Something"
        />
    

        <button id="btn" onClick={handleClick}>
          SEARCH
        </button>
      </div>
  
    </div>
  )
}
