import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(idx) {
    setNotes((prevNotes) => {
      let ret = prevNotes.filter((note, index) => {
        return index !== idx; 
      });
      
      if(ret.length === 0 ) return [];
      else return ret;
    });
  }

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote}/>
      {notes.map((note, idx) => (
        <Note 
          key={idx} 
          id={idx} 
          title={note.title} 
          content={note.content} 
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
