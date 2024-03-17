import React from "react";

function App() {
  const [time, getTime] = React.useState("TIME");

  const setTime = () => getTime(new Date().toLocaleTimeString().split(" ")[0]);
  setInterval(setTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
