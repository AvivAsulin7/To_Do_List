import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Typography,
  Grid,
  Grow,
  Container,
  useMediaQuery,
} from "@mui/material";
import Todos from "./components/Todos/Todos";
import Priority from "./components/Priority/Priority";
import ToDoContext from "./contexts/TodoContext";
import { getTodos } from "./actions/todo";
import { useTheme } from "@mui/material";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getTodos(setTodolist);
  }, [todolist, currentId]);
  return (
    <ToDoContext.Provider
      value={{
        todolist,
        setTodolist,
        currentId,
        setCurrentId,
      }}
    >
      <Container maxWidth="lg" sx={{ padding: matches ? "60px" : "20px" }}>
        <Grow in>
          <Container>
            <Typography
              variant={matches ? "h3" : "h1"}
              sx={{
                fontFamily: "Shadows Into Light",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "5rem",
                textAlign: "center",
              }}
            >
              Welcome to your To Do List .
            </Typography>
            <Grid
              display="flex"
              justify="space-between"
              alignItems="stretch"
              direction={matches ? "column" : "none"}
            >
              <Grid item xs={12} sm={7} margin="auto" marginTop="0">
                <Todos />
              </Grid>
              <Grid item xs={12} sm={4} marginLeft="auto">
                <Priority title={"High Priority"} prio="high" />
                <Priority title={"Low Priority"} prio="low" />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ToDoContext.Provider>
  );
}

export default App;
