const express = require("express");
const router = express.Router();

// require students_controller from controller
const studentsController = require("../controllers/students_controller");

// post method to update student details 
router.post("/update/:id", studentsController.update);

// get method to render add student page 
router.get("/add-student", studentsController.addStudent);

// get method to render edit student page 
router.get("/edit-student/:id", studentsController.editStudent);

// post method to create or add new student 
router.post("/create", studentsController.create);

// post method to Deletion of student 
router.get("/destroy/:studentId", studentsController.destroy);

module.exports = router;
