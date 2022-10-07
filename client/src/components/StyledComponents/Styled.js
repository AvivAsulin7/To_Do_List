import React from "react";
import { styled } from "@mui/system";
import { TextField, Typography, Paper, Button, Box } from "@mui/material";

export const BoxList = styled(Box)({
  width: "100%",
  height: "auto",
  minHeight: "500px",
  maxWidth: "100%",
  minWidth: "250px",
  background: "#f1f5f",
  backgroundColor: "#fff",
  backgroundImage: "radial-gradient(#bfc0c1 7.2%, transparent 0)",
  backgroundSize: "25px 25px",
  borderRadius: "20px",
  boxShadow: "4px 3px 7px 2px #00000040",
  padding: "1rem",
  boxSizing: "border-box",
});

export const CustomButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#2192FF",
  fontFamily: "Architects Daughter",
  border: "1px solid #fff",
  borderRadius: "15px",
  marginLeft: "20px",
  "&:hover": {
    color: "black",
    backgroundColor: "#F57328",
    transition: "all .5s ease-in-out",
  },
});

export const IconButton = styled(Button)({
  display: "inline-block",
  padding: "1",
  minHeight: "0",
  minWidth: "0",
});
