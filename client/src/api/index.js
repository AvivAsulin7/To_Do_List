import axios from "axios";

const mrl = "https://to-do-list-backend-kkb8.onrender.com/todo";
const url = "http://localhost:3000/todo";

export const fetchTodos = () => axios.get(url);
export const createTodo = (todo) => axios.post(url, todo);
export const deleteTodo = (id) => axios.post(`${url}/${id}`);
export const updateTodo = (id, newTodo) => axios.patch(`${url}/${id}`, newTodo);
