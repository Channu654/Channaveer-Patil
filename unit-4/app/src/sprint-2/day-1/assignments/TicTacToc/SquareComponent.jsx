import React from "react";
import './Tic.css'

function SquareComponent(props){
    // defining classes
    const classes =props.className ?`${props.className} square`:'square';
    return( <span className={classes} onClick={props.onClick} >
        {props.state}
        </span>
    );  
}
export {SquareComponent}