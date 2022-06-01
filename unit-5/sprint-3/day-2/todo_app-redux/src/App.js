import './App.css';
import { Todoinput } from './component/Todoinput';
import { TodoList } from './component/TodoList';

function App() {
  return (
    <div className='App'>
      <h2>Redux</h2>
      <Todoinput />
      <TodoList />
    </div>
  );
}

export default App;
