import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    state: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function expand() {
    setIsExpanded(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
      state: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        {(isExpanded) && (
          <>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              style={{ marginBottom: "5px" }}
              placeholder="Title"
            />
            <hr
              style={{ marginBottom: "10px" }}
            />
            <div style={{ display: "flex" }}>
              <p style={{ width: "fit-content" }}>State: </p>
              <input
                type="radio"
                name="state"
                onChange={handleChange}
                style={{ width: "7%" }}
                value="Todo"
              // placeholder="Todo, Doing or Done... Type either one of the three."
              /><label htmlFor="state">Todo</label>
              <input
                name="state"
                type="radio"
                onChange={handleChange}
                style={{ width: "7%" }}
                value="Doing"
              // placeholder="Todo, Doing or Done... Type either one of the three."
              /><label htmlFor="state">Doing</label>
              <input
                type="radio"
                name="state"
                onChange={handleChange}
                value="Done"
                style={{ width: "7%" }}
              // placeholder="Todo, Doing or Done... Type either one of the three."
              /><label htmlFor="state">Done</label>
            </div>
            <hr
              style={{ marginTop: "10px" }}
            />
          </>
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          style={{ marginTop: "5px" }}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
