import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  console.log('todos:', todos);

  return (
    <div>
      {todos.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export { TodoList };
