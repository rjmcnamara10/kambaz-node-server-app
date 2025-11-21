import mongoose from "mongoose";
import moduleSchema from "../Modules/schema.js";
import assignmentsSchema from "../Assignments/schema.js";

const courseSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    number: String,
    credits: Number,
    description: String,
    modules: [moduleSchema],
    assignments: [assignmentsSchema],
  },
  { collection: "courses" }
);

export default courseSchema;
