import * as api from "../api";

export const getTodos = async (setTodolist) => {
  try {
    const { data } = await api.fetchTodos();
    setTodolist(data);
  } catch (error) {
    console.log(error);
  }
};
