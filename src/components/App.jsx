import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getAllTodo, addTodo, deleteTodo, editTodo } from "../utils/apiController";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllTodo(setNotes);
  }, [])

  const addNote = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    })
    console.log(note.title, "sdfsdf", note.content, "sdfsdf")
    addTodo(note.title, note.content, setNotes);
  }

  const deleteNote = (id) => {
    console.log(id);
    deleteTodo(id, setNotes);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const editNote = (id, title, content) => {
    editTodo(id, title, content, setNotes);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-grid">
        {
          notes.map((item) => {
            return (
              <Note
                key={item._id}
                id={item._id}
                title={item.title}
                content={item.content}
                onDelete={deleteNote}
                onEdit={editNote}
              />
            );
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
