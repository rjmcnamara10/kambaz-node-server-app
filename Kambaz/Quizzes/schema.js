import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  _id: String,
  title: String,
  points: Number,
  question: String,
  type: { type: String, enum: ["MC", "TF", "FIB"], required: true },
  mcOptions: [String], // multiple choice
  mcCorrect: String, // multiple choice
  tfCorrect: Boolean, // true/false
  fibCorrect: [String], // fill in the blank
});

const schema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  published: Boolean,
  type: {
    type: String,
    required: true,
    enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
    default: "GRADED_QUIZ",
  },
  assignment_group: {
    type: String,
    required: true,
    enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
    default: "QUIZZES",
  },
  shuffle_answers: Boolean,
  time_limit: Number,
  multiple_attempts: Boolean,
  number_attempts: Number,
  show_correct_answers: {
    type: String,
    required: true,
    enum: ["IMMEDIATELY", "AFTER_DUE_DATE", "NEVER"],
    default: "IMMEDIATELY",
  },
  access_code: String,
  one_q_at_time: Boolean,
  webcam_required: Boolean,
  lock_questions: Boolean,
  due_date: Date,
  available_date: Date,
  available_until: Date,
  points: Number,
  score: Number,
  questions: [questionSchema],
});

export default schema;
