import React, { useContext } from "react";
import TodoContext from "../../contexts/TodoContext";
import { Typography, Box, Button } from "@mui/material";
import { BoxList } from "../StyledComponents/Styled";
import { todoUpdate } from "../../actions/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Priority = ({ title, prio }) => {
  const { todolist } = useContext(TodoContext);
  return (
    <BoxList sx={{ minHeight: "300px", margin: "40px 0" }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          transform: "rotate(-2deg)",
          padding: "0.2rem 1.2rem",
          borderRadius: "20% 5% 20% 5%/5% 20% 25% 20%",
          backgroundColor: prio === "high" ? "#3CCF4E" : "#F32424",
          fontSize: " 1.5rem",
        }}
      >
        {title}
      </Typography>
      <ul>
        {todolist.map((item, index) =>
          item.priority === prio ? (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundSize: "25px",
              }}
            >
              <li>{item.todo}</li>
              <Button
                onClick={() =>
                  todoUpdate(item._id, {
                    todo: item.todo,
                    priority: "none",
                  })
                }
              >
                <FontAwesomeIcon icon={faTrashCan} color="black" />
              </Button>
            </Box>
          ) : null
        )}
      </ul>
    </BoxList>
  );
};

export default Priority;
