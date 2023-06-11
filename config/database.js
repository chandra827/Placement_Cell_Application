const mongoose = require("mongoose"); // Import the Mongoose library

require("dotenv").config(); // Load and configure environment variables

exports.connect = () => { // Export a function named "connect"
  mongoose
    .connect(process.env.MONGODB_URL, { // Connect to MongoDB using the provided connection URL
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new unified topology engine
    })
    .then(console.log("DB CONNECTED SUCCESSFULLY")) // Log success message (Incorrect, should be a function reference)
    .catch((err) => { // Catch any errors that occur during connection
      console.log("DB CONNECTION FAILED"); // Log failure message
      console.log(err); // Log the error details
      process.exit(1); // Exit the Node.js process with error code 1
    });
};
