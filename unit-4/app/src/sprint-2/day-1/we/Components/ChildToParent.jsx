import { useState } from "react";

const Child=({value ,handleIncre ,handleDecre})=>(<div>
     <h1>Count is :{value}</h1> 
     <div>
       <button onClick={handleIncre}>+</button>
       <button onClick={handleDecre}>-</button>

       </div>
     </div>)
  
function ChildToParent(){
const[count,setCount] = useState(0);
const handlechange = (value)=>{
    setCount(count+value);
}
    return (
        <div>
     <h1>Child To Parent </h1>
      <Child value={count} 
      handleDecre={()=>handlechange (-1)}
      handleIncre={()=>handlechange (+1)}
      />
   
        </div>
        
    )
}
export {ChildToParent}