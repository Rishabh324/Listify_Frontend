import React, { useEffect, useState } from "react";
import Header from "./Header";
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
    addTodo(note.title, note.content, note.state, setNotes);
  }

  const deleteNote = (id) => {
    deleteTodo(id, setNotes);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const editNote = (id, title, state, content) => {
    editTodo(id, title, content, state, setNotes);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-grid">
        <div className="list-grid">
          <h1 style={{ color: "white", borderBottom: "5px solid #F5BA13" }}>Todo Task List</h1>
          <div className="note-list">
            {
              notes.filter(item => item.state === "Todo").map((item) => {
                return (
                  <Note
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    content={item.content}
                    state={item.state}
                    onDelete={deleteNote}
                    onEdit={editNote}
                  />
                );
              })
            }
          </div>
        </div>
        <hr style={{ rotate: "90", width: "5px", color: "#F5BA13", backgroundColor: "#F5BA13", border: "0px solid" }} />
        <div className="list-grid">
          <h1 style={{ color: "white", borderBottom: "5px solid #F5BA13" }}>Done Task List</h1>
          <div className="note-list">
            {
              notes.filter(item => item.state === "Done").map((item) => {
                return (
                  <Note
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    content={item.content}
                    state={item.state}
                    onDelete={deleteNote}
                    onEdit={editNote}
                  />
                );
              })
            }
          </div>
        </div>
        <hr style={{ rotate: "90", width: "5px", color: "#F5BA13", backgroundColor: "#F5BA13", border: "0px solid" }} />
        <div className="list-grid">
          <h1 style={{ color: "white", borderBottom: "5px solid #F5BA13" }}>Doing Task List</h1>
          <div className="note-list">
            {
              notes.filter(item => item.state === "Doing").map((item) => {
                return (
                  <Note
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    content={item.content}
                    state={item.state}
                    onDelete={deleteNote}
                    onEdit={editNote}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
