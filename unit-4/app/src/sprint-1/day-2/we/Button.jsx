 import {useState} from "react";
function Button(){
const [name,setname]= useState("channu")
const handleName=()=>{
    setname("Rajahuli")
}
    return(
        <>
        <h1>{name}</h1>
        <button onClick= { handleName }> Change</button>
        </>
    )
}
export {Button}





 //  creating button with channu by clicking button name should change As rajahuli