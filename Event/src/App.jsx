import './App.css'
function App() {
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
  return (
      <div>
        <button onClick={cl}>Click</button>
        <p onMouseEnter={ptr}>hello every one today is very special day for all Student becouse principal sir anounce frewell party
        </p>
        <button onDoubleClick={db}>doubleClick</button>
        <form onSubmit={fsb}>
          <button>Subbmit</button>
        </form>
    </div>
  )
}

export default App
