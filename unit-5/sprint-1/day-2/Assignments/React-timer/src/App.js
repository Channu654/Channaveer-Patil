import './App.css';
import Timer1 from './Component1/Timer1';
import Timer from './components/Timer';

function App() {
  return (
    <div className='App'>
      {/* <Timer initial={0} /> */}
      <Timer1 initial={0} />
    </div>
  );
}

export default App;
