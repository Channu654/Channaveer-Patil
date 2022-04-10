import { useState } from "react";
 import "./Counter.css"

 function Counter(){
     const [count,setvalue] = useState(0);
     const handleAdd= ()=>{
         setvalue (count+1)
     };

     const handleReduce=()=>{
         setvalue(count-1)
     };

     const handleDouble=()=>{
        setvalue(count*2)
    };


     return(
         <>
         <h1>Counter</h1>
         <div> 
             <h1 className={count%2===0? "pos":'neg'}> {count} </h1>
         <button onClick={ ()=> handleAdd()}>Add</button>
         <button onClick={ ()=> handleReduce()}>Reduce</button>
         <button onClick={ ()=> handleDouble()}>Double</button>
         </div>
        
         </>
     )
 }
 export {Counter}

