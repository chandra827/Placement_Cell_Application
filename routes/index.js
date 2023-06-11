const express = require("express");
const router = express.Router();

// Mount routes for different endpoints
router.use("/", require("./users"));
router.use("/student", require("./students"));
router.use("/interview", require("./interviews"));
router.use('/job_page', require('./job_page'));

// Export the router
module.exports = router;
