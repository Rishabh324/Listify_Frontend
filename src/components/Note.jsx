import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit"
import Fab from "@mui/material/Fab";

function Note({ key, id, title, content, onDelete, onEdit }) {
  function handleDelete() {
    // console.log(id);
    onDelete(id);
  }

  function handleEdit() {
    onEdit(id, title, content);
  }

  return (
    <div className="note" key={key}>
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className="icon-hold">
        <Fab onClick={handleDelete}>
          <DeleteIcon />
        </Fab>
        <Fab onClick={handleEdit}>
          <EditIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Note;
