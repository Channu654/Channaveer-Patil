import { useState } from "react";
function Count(){
    const[count,setvalue] = useState(0);
    // for incre
    const handleInc =()=>{
        setvalue(count+1);
    }
    // for Decre
    const handleDec =()=>{
        setvalue(count-1)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={ handleInc }> Increment</button>
        <button onClick= { handleDec } > Decrement</button>


        </>
    )
}
export {Count}