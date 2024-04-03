import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function setName(element) {
    const newFullName = structuredClone(fullName);
    newFullName[element.target.name] = element.target.value;
    setFullName(newFullName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={setName}
          value={fullName.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={setName}
          value={fullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
