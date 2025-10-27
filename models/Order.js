import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  product: String,
  quantity: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
