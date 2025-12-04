import './App.css'
import { useState } from 'react';
function App() {

  let [count,setcount]=useState(0) //if usestate return two array valuue after deconstruction arr replace from two retun arrays
  //here setcount is a method
  function cl(){
    console.log("hello sonu");
    
  }
  function ptr(){
    console.log("bByy");
    
  }
  function db(){
    console.log("doublrcli");
    
  }
  function fsb(Event){
    Event.preventDefault();//this line prevent while you submitted then not everything is clear
    console.log("submitted");
    
  }
  function inc(){
    setcount(count+1);
  }
  return (
      <div>
        <button onClick={cl}>Click</button>
        <p onMouseEnter={ptr}>hello every one today is very special day for all Student becouse principal sir anounce frewell party
        </p>
        <button onDoubleClick={db}>doubleClick</button>
        <form onSubmit={fsb}>
          <button>Subbmit</button>
        </form>
        <h2>{count}</h2>
        <button onClick={inc}>increment</button>
    </div>
  )
}

export default App
