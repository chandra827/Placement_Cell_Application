const express = require("express");
const router = express.Router();

// require interview from controller
const interviewController = require("../controllers/interviews_controller");

// get method add interview 
router.get("/add-interview", interviewController.addInterview);

// post method create interview 
router.post("/create", interviewController.create);

// post method to Enrolling student in the interview 
router.post("/enroll-in-interview/:id", interviewController.enrollInInterview);

// get method add interview 
router.get("/deallocate/:studentId/:interviewId", interviewController.deallocate);

module.exports = router;
