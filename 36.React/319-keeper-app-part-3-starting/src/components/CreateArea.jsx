import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={props.updateTitle}
          placeholder="Title"
          value={props.title}
        />
        <textarea
          name="content"
          onChange={props.updateContent}
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
