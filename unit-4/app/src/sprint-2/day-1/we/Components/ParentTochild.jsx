import { useState } from "react";

const Child=({value})=><h3> Count is :{value}</h3>
function ParentTochild(){
const[count,setCount] = useState(0)
    return (
        <div>
     <h1>Parent To child</h1>
      <Child value={count}/>
      <button onClick={()=>setCount(count+1)}> +</button>
      <button onClick={()=>setCount(count-1)}> -</button>
        </div>
        
    )
}
export {ParentTochild}