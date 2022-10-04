import React from "react";
import { Box } from "@mui/material";

const Todo = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundSize: "25px",
      }}
    >
      <li style={{ textAlign: "left", padding: "0.4rem" }}>{item.todo}</li>
    </Box>
  );
};

export default Todo;
