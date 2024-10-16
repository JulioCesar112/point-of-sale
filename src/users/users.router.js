const express = require("express"); // Import the Express framework
const router = express.Router(); // Create a new router instance
const userServices = require("./users.services"); // Import user service functions
//! Rutas protegidas
const passport = require("passport");
require("../middlewares/auth.middleware")(passport)
const { adminValidate } = require("../middlewares/role.middleware");


//! Root Routes
router.get("/", userServices.getAllUsers)

router.post("/", userServices.registerUser)

//? Ruta de informacion propia del usuario logeado 
router.route("/me")
  .get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
  .patch(passport.authenticate("jwt", { session: false }), userServices.updateMyUser)
  .delete(passport.authenticate("jwt", { session: false }), userServices.deleteMyUser)

//! Dynamic Routes
router.route("/:id") // Define routes that require an ID parameter
  .get(
    userServices.getUserById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.patchUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.deleteUser
  )


module.exports = router; // Export the router to use in other parts of the application
