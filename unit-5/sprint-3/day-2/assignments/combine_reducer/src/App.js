import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Todo from "./components/Todo";
import { adding,subtracting } from "./Redux/Counter/action";
function App() {
  const count=useSelector(store=>store.count)
  const dispatch=useDispatch()
  return (
    <>
    <div className="App">
      <h3>Redux</h3>
      <h5>{count.count}</h5>
      <button onClick={()=>dispatch(adding(1))}>add</button>
      <button onClick={()=>dispatch(subtracting(1))}>sub</button>
    </div>
    <br />
    <Todo />
    </>
  );
}

export default App;
