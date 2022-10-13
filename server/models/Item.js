import mongoose from "mongoose";

const ItemSchema = mongoose.Schema({
  todo: String,
  priority: { type: String, default: "none" },
});

const Item = mongoose.model("Item", ItemSchema);

export default Item;
