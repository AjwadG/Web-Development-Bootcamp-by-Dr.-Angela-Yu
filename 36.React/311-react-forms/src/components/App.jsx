import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [Hello, setHello] = useState(name);

  function saveName(event) {
    setName(event.target.value);
  }

  function sayHello() {
    setHello(name);
  }
  return (
    <div className="container">
      <h1>Hello {Hello}</h1>
      <input
        onChange={saveName}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={sayHello}>Submit</button>
    </div>
  );
}

export default App;
