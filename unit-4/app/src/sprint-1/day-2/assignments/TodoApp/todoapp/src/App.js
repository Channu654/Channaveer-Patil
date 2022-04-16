import './App.css';
import { Todos } from './components/Todos';
//2. createing a obj here and sending as props to todos as array of obj
// let todos=[
//   {id:1,value:'React', completed:false},
//   {id:2,value:'webpack', completed:true},
//   {id:3,value:'useState', completed:true},
//   {id:4,value:'useEffect', completed:true},

// ]
function App() {
  return (
    <div className='App'>
      {/* 3. using todos here as props and sending to Todos componenet*/}
      <Todos />
    </div>
  );
}

export default App;
