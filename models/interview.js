const mongoose = require("mongoose");

// Define the interview schema using mongoose.Schema
const interviewSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    students: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        result: {
          type: String,
          enum: ["PASS", "FAIL", "Didn't Attempt", "On Hold"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create a model named "Interview" using the interviewSchema
const Interview = mongoose.model("Interview", interviewSchema);

// Export the Interview model
module.exports = Interview;
