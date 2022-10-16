import axios from "axios";

const url = "https://to-do-list-backend-wipa.onrender.com";

export const fetchTodos = () => axios.get(url);
export const createTodo = (todo) => axios.post(url, todo);
export const deleteTodo = (id) => axios.post(`${url}/${id}`);
export const updateTodo = (id, newTodo) => axios.patch(`${url}/${id}`, newTodo);
