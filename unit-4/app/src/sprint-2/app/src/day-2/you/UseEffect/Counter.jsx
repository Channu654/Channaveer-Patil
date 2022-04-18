
import React, {useEffect, useState} from "react";
import './Count.css'
// problem satement = after clicking on button its hould change its state .
function Counter(){
    const [num, setnum]= useState(0)
    const [nums, setnums]= useState(0)

   useEffect (()=>{
    alert ("i am clicked")
   },[num,nums])
    return (
        <> 
        <button onClick={()=>{setnum(num+1)}}> Click me {num} </button>
        <br />
        <button onClick={()=>{setnums(nums+1)}}> Click me {nums} </button>
        </>
    )
};
export {Counter}