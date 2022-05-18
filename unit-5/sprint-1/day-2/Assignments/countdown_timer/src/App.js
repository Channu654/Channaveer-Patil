import './App.css';
import CountdownTimer from './componets/CountdownTimer';
import { getReamingtimeUntilMsTimestamp } from './componets/utilis/CoutdownTimerutils';

function App() {
  return (
    <div className='App'>
      <CountdownTimer countdownTimestamapMs={1652600000} />
    </div>
  );
}

export default App;
