import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Input, Button, TextField } from "@mui/material";
import { BoxList, CustomButton } from "../StyledComponents/Styled";
import TodoContext from "../../contexts/TodoContext";
import { todoCreate, todoUpdate } from "../../actions/todo";
import Todo from "../Todo/Todo";

const Todos = () => {
  const { todolist, currentId, setCurrentId } = useContext(TodoContext);
  const [item, setItem] = useState({ todo: "", priority: "none" });
  const [itemUpdated, setItemUpdated] = useState({});

  useEffect(() => {
    setItem(itemUpdated);
  }, [itemUpdated]);

  const handleSumbit = () => {
    if (currentId == null) todoCreate(item);
    else {
      setItemUpdated(
        currentId ? todolist.map((item) => item._id === currentId) : null
      );
      todoUpdate(currentId, item);
    }
    setCurrentId(null);
    setItem({ todo: "", priority: "" });
  };
  return (
    <BoxList>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          transform: "rotate(2deg)",
          padding: "0.2rem 1.2rem",
          borderRadius: "20% 5% 20% 5%/5% 20% 25% 20%",
          backgroundColor: "#fdcb6e",
          fontSize: " 1.5rem",
        }}
      >
        To To List
      </Typography>
      {/* <form autoComplete="off" noValidate onSubmit={handleSumbit}> */}
      <Input
        onChange={(e) => setItem({ todo: e.target.value, priority: "none" })}
        disableUnderline
        sx={{
          boxSizing: "border-box",
          backgroundColur: "transparent",
          padding: "0.7rem",
          border: "solid 1px transparent",
          borderBottom: "dashed 3px #fdcb6e",
          //   fontSize: "1rem",
          fontWeight: "bold",
          width: "70%",
          fontFamily: "Architects Daughter",
        }}
      ></Input>
      <CustomButton
        type="sumbit"
        onClick={() => {
          handleSumbit();
        }}
      >
        Add
      </CustomButton>
      {/* </form> */}
      <ul>
        {todolist.map((item, index) => {
          return <Todo item={item} key={index} />;
        })}
      </ul>
    </BoxList>
  );
};

export default Todos;
