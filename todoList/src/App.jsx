import "./App.css";
import { useState } from "react";

function App() {
  let [todos, setodos] = useState(["sample task"]);
  let [newtodo, setnewtodo] = useState("");

  let addnewt = () => {
    setodos([...todos, newtodo]);
    setnewtodo("");
  };

  let updatev = (Event) => {
    setnewtodo(Event.target.value);
  };

  return (
    <div>
      <h1>TODO List</h1>

      <input
        placeholder="Enter Task"
        className="in"
        value={newtodo}
        onChange={updatev}
      />

      <button onClick={addnewt}>Add</button>
      <button>Remove</button>

      <br />
      <br />
      <hr />

      <h3>Your TODO Task</h3>

      <ul>
        {todos.map((use) => {
          return <li>{use}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
