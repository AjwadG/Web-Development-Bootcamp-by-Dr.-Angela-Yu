import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(data) {
  return (
    <Entry
      key={data.id}
      emoji={data.emoji}
      name={data.name}
      meaning={data.meaning}
    />
  );
}
function Dict() {
  return (
    <dl className="dictionary">
      {emojipedia.map(createEntry)}
    </dl>
  );
}

export default Dict;
