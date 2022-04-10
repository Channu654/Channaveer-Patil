import logo from './logo.svg';
import './App.css';
import { Join } from './sprint-1/day-1/assignments/Problem2/Join';
import { Settings } from './sprint-1/day-1/assignments/Problem2/Setting';
import { Login } from './sprint-1/day-1/assignments/Problem2/Login';
import { Contacts } from './sprint-1/day-1/assignments/Problem2/Contacts';
import { Search } from './sprint-1/day-1/assignments/Problem2/Search';
import { Help } from './sprint-1/day-1/assignments/Problem2/Help';
import { Home } from './sprint-1/day-1/assignments/Problem2/Home';
import { Download } from './sprint-1/day-1/assignments/Problem2/Downloads';
// import First from './sprint-1/day-1/assignments/Problem1/First';
// import {Counter} from './sprint-1/day-2/assignments/Counter/Counter'




function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <First/> */}
      <Join/>
      <Settings/>  <br/>
     <Login/>
     <Contacts/> <br/>
     <Search/>
     <Help/><br/>
     <Home/>
    <Download/>
    </div>
  );
}

export default App;
