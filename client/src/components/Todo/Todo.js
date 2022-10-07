import React, { useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faCircleCheck,
  faPenToSquare,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { todoDelete, todoUpdate } from "../../actions/todo";
import { IconButton } from "../StyledComponents/Styled";

const Todo = ({ item }) => {
  const [isDone, setIsDone] = useState(false);

  const updatePriority = (prio) => {
    todoUpdate(item._id, { todo: item.todo, priority: prio });
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
        <IconButton onClick={() => updatePriority("high")}>
          <FontAwesomeIcon icon={faArrowUp} color="#3CCF4E" />
        </IconButton>
        <IconButton onClick={() => updatePriority("low")}>
          <FontAwesomeIcon icon={faArrowDown} color="#F32424" />
        </IconButton>
        <IconButton onClick={() => setIsDone(!isDone)}>
          <FontAwesomeIcon icon={faCircleCheck} color="#FFC23C" />
        </IconButton>
        {/* <IconButton onClick={() => setCurrentId(item._id)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </IconButton> */}
        <IconButton onClick={() => todoDelete(item._id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Todo;
