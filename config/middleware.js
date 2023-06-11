module.exports.setFlash = function (req, res, next) { // Export a function named "setFlash" as part of the module
  res.locals.flash = { // Set the "flash" object in the response locals
    'success': req.flash('success'), // Assign the value of "success" flash messages to the "success" property
    'error': req.flash('error'), // Assign the value of "error" flash messages to the "error" property
  };

  next(); // Call the next middleware in the request-response cycle
};
