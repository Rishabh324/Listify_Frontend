import axios from 'axios';

const baseURL = "https://rococo-manatee-1b0b7d.netlify.app/";

const getAllTodo = (setNotes) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log(data.data.Todos);
            setNotes(data.data.Todos);
        })
        .catch(err => console.log(err));
}

const addTodo = (title, content, setNotes) => {
    axios
        .post(`${baseURL}save`, {
            title: title,
            content: content
        })
        .then(() => {
            getAllTodo(setNotes);
        })
        .catch(err => console.log(err));
}

const editTodo = (id, title, content, setNotes) => {
    axios
        .patch(`${baseURL}save/${id}`, {
            title: title,
            content: content
        })
        .then(() => {
            getAllTodo(setNotes);
        })
        .catch(err => console.log(err));
}

const deleteTodo = (id, setNotes) => {
    axios
        .delete(`${baseURL}delete/${id}`, {
            id: id,
        })
        .then((res) => {
            getAllTodo(setNotes);
        })
        .catch(err => console.log(err));
}

export { getAllTodo, addTodo, editTodo, deleteTodo };