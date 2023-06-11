const express = require('express');
const router = express.Router();

// require job page from controller
const jobList = require('../controllers/jobs_page');

// get method to jobs page 
router.get('/list', jobList.jobPage);
module.exports = router;