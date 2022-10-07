import axios from "axios";

const url = "http://localhost:5000/todo";

export const fetchTodos = () => axios.get(url);
export const createTodo = (todo) => axios.post(url, todo);
export const deleteTodo = (id) => axios.post(`${url}/${id}`);
export const updateTodo = (id, newTodo) => axios.patch(`${url}/${id}`, newTodo);