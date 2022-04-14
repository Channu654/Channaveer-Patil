import React ,{useState ,useEffect} from "react";
import './Tic.css'
import {SquareComponent} from './SquareComponent'
// initially we dont have data which means empty Array of string
const initalState = ["","","","","","","","","",];
function TicTac(){
    // defining game state
    const [gameState,UpdateState]= useState(initalState);
    const [isxchance,UpdateXchance]=useState(false);

    // defining onclicked 
    const onSquarecliked = (index)=>{
   let string = Array.from(gameState);

   string[index]=isxchance?"x":'0';
   UpdateState(string);
   UpdateXchance(isxchance);
    }
useEffect(()=>{
    let winner = checkWinner();
   
},[gameState]);
const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}
    return(
        <div className="app-header">
            <p className="heading-text"> Tic Tac Toe </p>
            <div className="row jc-center">
            <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={()=>onSquarecliked(0)}/>
            <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={()=>onSquarecliked(1)}/>
            <SquareComponent className="b-bottom"  state={gameState[2]} onClick={()=>onSquarecliked(2)}/>
            </div >
            <div className="row jc-center">
            <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={()=>onSquarecliked(3)}/>
            <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={()=>onSquarecliked(4)}/>
            <SquareComponent className="b-bottom" state={gameState[5]} onClick={()=>onSquarecliked(5)}/>
            </div>
            <div className="row jc-center">
            <SquareComponent className="b-right" state={gameState[6]} onClick={()=>onSquarecliked(6)}/>
            <SquareComponent className="b-right" state={gameState[7]} onClick={()=>onSquarecliked(7)}/>
            <SquareComponent  state={gameState[8]} onClick={()=>onSquarecliked(8)}/>
            </div>
            <button className="clear-button" onClick={()=>UpdateState(initalState)}> Clear Game</button>
            <p>Channaveer</p>
        </div>
    )
}
export {TicTac}