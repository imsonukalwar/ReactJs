import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(5)/*here  consthas [] two paramiter first is conter =(it is a veriable) and setcounter  is a function */
  //let counter=5;

  const addval=()=>{
    // console.log("value added ",counter);
    // counter=counter+1;/**but here is a problrm on UI , when i click on add value value cant change on ui ut is change on browser not on ui */
      if(counter<=9){
    setCounter(counter+1)
      }
      
  }
  const decval=()=>{
    if(counter>=1){
    setCounter(counter-1)
    }
  }
  return (
    <>
        <h1>Reat with js and html</h1>
        <h2>counter is : {counter}</h2>
        <button
        onClick={addval}>
        Add value</button>
        <br/>
        <button
        onClick={decval}
        >Decrese value</button>
    </>
  )
}

export default App
