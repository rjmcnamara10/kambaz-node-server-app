import mongoose from "mongoose";
import moduleSchema from "../Modules/schema.js";
import assignmentsSchema from "../Assignments/schema.js";
import quizzesSchema from "../Quizzes/schema.js"

const courseSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    number: String,
    credits: Number,
    description: String,
    modules: [moduleSchema],
    assignments: [assignmentsSchema],
    quizzes: [quizzesSchema]
  },
  { collection: "courses" }
);

export default courseSchema;
