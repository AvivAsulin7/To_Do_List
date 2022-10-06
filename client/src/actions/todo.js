import * as api from "../api";

export const getTodos = async (setTodolist) => {
  try {
    const { data } = await api.fetchTodos();
    setTodolist(data);
  } catch (error) {
    console.log(error);
  }
};

export const todoCreate = async (todo) => {
  try {
    const { data } = await api.createTodo(todo);
  } catch (error) {
    console.log(error);
  }
};

export const todoDelete = async (id) => {
  try {
    await api.deleteTodo(id);
  } catch (error) {
    console.log(error);
  }
};

export const todoUpdate = async (id, newTodo) => {
  try {
    await api.updateTodo(id, newTodo);
  } catch (error) {
    console.log(error);
  }
};
