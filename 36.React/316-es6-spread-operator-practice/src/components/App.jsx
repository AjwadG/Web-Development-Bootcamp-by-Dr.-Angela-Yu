import React, { useState } from "react";
import Note from "./note";

function App() {
  const [items, setItems] = useState([]);

  function addNote() {
    const input = document.getElementById("newNote");
    const newNote = input.value;
    input.value = "";
    if (newNote != "") setItems([...items, newNote]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" id="newNote" />
        <button onClick={addNote}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((note, i) => {
            return <Note key={i} note={note} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
