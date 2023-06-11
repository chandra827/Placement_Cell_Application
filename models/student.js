const mongoose = require("mongoose");

// Define the student schema using mongoose.Schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    college: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    dsa_score: {
      type: Number,
      required: true,
    },
    webdev_score: {
      type: Number,
      required: true,
    },
    react_score: {
      type: Number,
      required: true,
    },
    placement_status: {
      type: String,
      enum: ["Placed", "Not placed"],
      required: true,
    },
    interviews: [
      {
        company: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
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

// Create a model named "Student" using the studentSchema
const Student = mongoose.model("Student", studentSchema);

// Export the Student model
module.exports = Student;
