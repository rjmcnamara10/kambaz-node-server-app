import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: String,
  title: String,
  course: String,
  available_date: Date,
  available_until: Date,
  due_date: Date,
  points: Number,
  description: String,
});

export default schema;
