import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography, Box, Grid, Grow, Container } from "@mui/material";
import Todos from "./components/Todos/Todos";
import HighPrio from "./components/HighPrio/HighPrio";
import LowPrio from "./components/LowPrio/LowPrio";
import ToDoContext from "./contexts/TodoContext";
import { getTodos } from "./actions/todo";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    getTodos(setTodolist);
  }, []);
  return (
    <ToDoContext.Provider value={{ todolist, setTodolist, todo, setTodo }}>
      <Container maxWidth="lg" sx={{ padding: "120px" }}>
        <Grow in>
          <Container>
            <Grid display="flex" justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7} margin="auto" marginTop="0">
                <Todos />
              </Grid>
              <Grid item xs={12} sm={4} marginLeft="auto">
                <HighPrio />
                <LowPrio />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ToDoContext.Provider>
  );
}

export default App;
