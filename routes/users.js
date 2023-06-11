const express = require("express");
const passport = require("passport");
const router = express.Router();

const { downloadCSVReport } = require("../controllers/csv_controller");
const usersController = require("../controllers/users_controller");
const dashboardController = require("../controllers/dashboard_controller");

// profile page
router.get("/profile", passport.checkAuthentication, usersController.profile);

// for update profile
router.post("/update", passport.checkAuthentication, usersController.update);

// signin
router.get("/", usersController.signIn);

// signup
router.get("/sign-up", usersController.signUp);

// dashboard page
router.get("/dashboard", dashboardController.dashboard);

// to create new user
router.post("/create", usersController.create);

// use passport as middleware to authenticate
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/" }),
  usersController.createSession
);

// get signout
router.get("/sign-out", usersController.destroySession);

// download csv report
router.get("/download", downloadCSVReport);

module.exports = router;
