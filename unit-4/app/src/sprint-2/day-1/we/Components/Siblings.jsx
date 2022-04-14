import { useState } from "react";

const Child=({value })=>(<div>
     <h1>Count is :{value}</h1> 
     </div>);

     const Button=({handleClick, label})=>(
         <button onClick={handleClick}> {label} </button>
     );
  
function Siblings(){
const[count,setCount] = useState(0);
const handlechange = (value)=>{
    setCount(count+value);
}
    return (
        <div>
     <h1>Siblings </h1>
      <Child value={count} 
      handleDecre={()=>handlechange (-1)}
      handleIncre={()=>handlechange (+1)}
      />
   <Button label="+" handleClick={()=>handlechange (+1)}/>
   <Button label="-" handleClick={()=>handlechange (-1)}/>

        </div>
        
    )
}
export {Siblings}