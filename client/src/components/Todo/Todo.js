import React, { useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { todoDelete } from "../../actions/todo";
import TodoContext from "../../contexts/TodoContext";

const Todo = ({ item }) => {
  const { currentId, setCurrentId } = useContext(TodoContext);

  const [isDone, setIsDone] = useState(false);
  const handleDelete = () => {
    setCurrentId(item._id);
    todoDelete(item._id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundSize: "25px",
      }}
    >
      <li
        style={{
          textAlign: "left",
          padding: "0.4rem",
          textDecoration: isDone ? "line-through" : "none",
        }}
      >
        {item.todo}
      </li>
      <Box display="flex">
        <Button onClick={() => setIsDone(!isDone)}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </Button>
        <Button onClick={() => setCurrentId(item._id)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
        <Button onClick={() => handleDelete()}>
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </Box>
    </Box>
  );
};

export default Todo;
