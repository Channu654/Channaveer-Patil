import './App.css';
import { TodoList } from './component/TodoList';
import { Todosinput } from './component/Todosinput';

function App() {
  return (
    <div className='App'>
      <h2>redux1</h2>
      <Todosinput />
      <TodoList />
    </div>
  );
}

export default App;
