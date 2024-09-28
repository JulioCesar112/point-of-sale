const express = require("express"); // Import the Express framework
const router = express.Router(); // Create a new router instance
const userServices = require("./users.services"); // Import user service functions

//! Root Routes
router.get("/", userServices.getAllUsers); // Route to get all users

//! Dynamic Routes
router.route("/:id") // Define routes that require an ID parameter
  .get(userServices.getUserById)      // Route to get a user by ID
  .patch(userServices.patchUser)       // Route to update a user by ID
  .delete(userServices.deleteUser);    // Route to delete a user by ID

module.exports = router; // Export the router to use in other parts of the application
