const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the user schema using mongoose.Schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// encrypt password before saving it in the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// validate the password with the user's stored password
userSchema.methods.isValidatedPassword = async function (userSentPassword) {
  return await bcrypt.compare(userSentPassword, this.password);
};

// Create a model named "User" using the userSchema
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
