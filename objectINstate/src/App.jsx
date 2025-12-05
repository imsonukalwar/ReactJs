import { useState } from 'react'
import './App.css'

function App() {
// let [count, setcount]=useState(0);
let [move,setmove]=useState({blue:0,red:0,yellow:0,green:0})
// function inc(){
//   setcount(count+1);
// }
let updatebulue=()=>{
  move.blue+=1;
  setmove({...move});
}
let updatered=()=>{
  move.red+=1;
  setmove({...move});
}
let updateyellow=()=>{
  move.yellow+=1;
  setmove({...move});
}
let updategreen=()=>{
  move.green+=1;
  setmove({...move});
}
  return (
    <>
    <h2>Start yuor Game</h2>
    <p>Blue is ={move.blue}</p>
    <button style={{backgroundColor:"blue", color:'black'}} onClick={updatebulue}>1+</button>
    <p>White is ={move.red}</p>
    <button style={{backgroundColor:"red" ,color:'black'}}onClick={updatered}>1+</button>
    <p>Yellow is ={move.yellow}</p>
    <button style={{backgroundColor:"yellow",color:'black'}}onClick={updateyellow}>1+</button>
    <p>Green is ={move.green}</p>
    <button style={{backgroundColor:"green",color:'black'}}onClick={updategreen}>1+</button>

    </>
  )
}

export default App
