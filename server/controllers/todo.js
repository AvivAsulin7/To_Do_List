import mongoose from "mongoose";
import Item from "../models/Item.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Item.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const item = req.body;
  const newItem = new Item(item);
  try {
    await newItem.save();
    res.status(201).json(todos);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
