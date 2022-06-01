import './App.css';
import Counter from './components/Counter';
import { store } from './Store/Store';
//5
console.log(store.getState());
function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export default App;
