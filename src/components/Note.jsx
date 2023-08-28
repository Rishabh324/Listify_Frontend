import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from '@mui/material/Modal';
import EditIcon from "@mui/icons-material/Edit"
import Fab from "@mui/material/Fab";
import Box from '@mui/material/Box';
import { useDrag, useDrop } from 'react-dnd'

function Note({ key, id, title, state, content, onDelete, onEdit }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "fit-content",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#F5BA13",
  };

  const [open, setOpen] = useState(false);
  const [ttl, setTtl] = useState(title);
  const [cntt, setCntt] = useState(content);
  const [stat, setStat] = useState(state);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "note",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "note",
    item: id,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const addItemToSection = (id) => {
    console.log("dropped", id);
  }
  function handleDelete() {
    onDelete(id);
  }

  function handleEdit() {
    onEdit(id, ttl, stat, cntt);
    setOpen(false);
  }

  return (
    <div ref={drag} className="note" key={key} >
      <div className="content">
        <h1><b>Title:</b> {title}</h1>
        <p><b>State:</b> {state}</p>
        <p><b>Content:</b> {content}</p>
      </div>
      <div className="icon-hold">
        <Fab onClick={handleDelete}>
          <DeleteIcon />
        </Fab>
        <Fab>
          <EditIcon onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <label htmlFor="title"><b>Enter Title to Update:</b></label>
              <br />
              <input name="title" type="text" value={ttl} style={{ height: "30px", marginTop: "5px", padding: "10px", fontFamily: "Montserrat, sans-serif" }} onChange={(e) => setTtl(e.target.value)}></input>
              <br />
              <br />
              <label htmlFor="title"><b>Select State to Update:</b></label>
              <br />
              <input name="title" type="radio" value="Todo" style={{ marginRight: "5px", marginTop: "5px", padding: "10px", fontFamily: "Montserrat, sans-serif" }} onChange={(e) => setStat(e.target.value)} defaultChecked={stat === "Todo" ? true : false}></input>
              <label style={{ marginRight: "15px" }} htmlFor="title">Todo</label>
              <input name="title" type="radio" value="Doing" style={{ marginRight: "5px", marginTop: "5px", padding: "10px", fontFamily: "Montserrat, sans-serif" }} onChange={(e) => setStat(e.target.value)} defaultChecked={stat === "Doing" ? true : false}></input>
              <label style={{ marginRight: "15px" }} htmlFor="title">Doing</label>
              <input name="title" type="radio" value="Done" style={{ marginTop: "5px", marginRight: "5px", padding: "10px", fontFamily: "Montserrat, sans-serif" }} onChange={(e) => setStat(e.target.value)} defaultChecked={stat === "Done" ? true : false}></input>
              <label htmlFor="title">Done</label>
              <br />
              <br />
              <label htmlFor="title"><b>Enter Content to Update:</b></label>
              <br />
              <textarea name="title" rows={20} cols={100} value={cntt} style={{ marginTop: "5px", padding: "10px", fontFamily: "Montserrat, sans-serif" }} onChange={(e) => setCntt(e.target.value)}></textarea>
              <br />
              <br />
              <button onClick={handleEdit} style={{ padding: "10px", borderRadius: "7px", border: "0px solid", cursor: "pointer" }}>Update</button>
            </Box>
          </Modal>
        </Fab>
      </div>
    </div>
  );
}

export default Note;
