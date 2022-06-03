import { useSelector } from 'react-redux';

const TodoList = () => {
  const todo = useSelector((state) => state.todos);
  console.log('todo:', todo);
  return(
  <div>
    {todo.map((item) => {
      return(
      <div key={item.id}>
        <h2>{item.title}</h2>
      </div>
      );
    })}
  </div>);
};

export { TodoList };
