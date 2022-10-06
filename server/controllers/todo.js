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
    res.status(201).json(newItem);
  } catch (error) {
    // res.status(409).json({ message: error.message });
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Todo with that id");
  await Item.findByIdAndDelete(id);
  res.json({ message: "Todo deleted succesfully" });
};

export const updateTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Todo with that id");
  const todoUpdate = await Item.findByIdAndUpdate(
    _id,
    { ...todo, _id },
    { new: true }
  );
  res.json(todoUpdate);
};
