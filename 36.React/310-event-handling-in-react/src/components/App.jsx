import React, { useState } from "react";

function App() {
  const [buttonStyle, SetButtonStyle] = useState("white");

  function change() {
    if (buttonStyle == "white") SetButtonStyle("black");
    else SetButtonStyle("white");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseEnter={change}
        onMouseLeave={change}
        style={{ backgroundColor: buttonStyle }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
