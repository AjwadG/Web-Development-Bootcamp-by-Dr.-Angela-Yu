import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addNote(event) {
    event.preventDefault();
    const newNote = { title, content };
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setTitle("");
    setContent("");
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function updateTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function updateContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  return (
    <div>
      <Header />
      <CreateArea
        title={title}
        content={content}
        updateTitle={updateTitle}
        updateContent={updateContent}
        addNote={addNote}
      />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            id={index}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
