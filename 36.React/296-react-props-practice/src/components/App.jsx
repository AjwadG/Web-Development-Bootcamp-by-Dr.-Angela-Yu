import React from "react";
import Card from "./Card";
import contacts from "../contacts";

const final = contacts.map((data) => {
  return Card(data);
});

function App() {
  return (
    <div>
      <h1 className="heading">Most popular technologies 2022</h1>
      {final}
    </div>
  );
}

export default App;
