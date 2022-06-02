import { useSelector } from 'react-redux';

const TodoList = () => {
  const todo = useSelector((state) => state.todos);
  console.log('todo:', todo);

  return (
    <div>
      {todo.map((item) => {
        return (
          <div key={item.id}>
          
          </div>
        );
      })}
    </div>
  );
};
export { TodoList };
