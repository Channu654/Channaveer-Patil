import './App.css';
import counter from './components/counter';
import { store } from './Store/Store';
//5
console.log(store.getState());
function App() {
  return (
    <div className='App'>
      <counter />
    </div>
  );
}

export default App;
