import axios from 'axios';

const baseURL = "https://listifyback.onrender.com/";

const getAllTodo = (setNotes) => {
    axios
        .get(`${baseURL}`)
        .then(({ data }) => {
            console.log(data.data.Todos);
            setNotes(data.data.Todos);
        })
        .catch(err => console.log(err));
}

const addTodo = (title, content, state, setNotes) => {
    axios
        .post(`${baseURL}save`, {
            title: title,
            content: content,
            state: state
        })
        .then(() => {
            getAllTodo(setNotes);
        })
        .catch(err => console.log(err));
}

const editTodo = (id, ttl, cntt, stet, setNotes) => {
    axios
        .patch(`${baseURL}save/${id}`, {
            title: ttl,
            content: cntt,
            state: stet
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