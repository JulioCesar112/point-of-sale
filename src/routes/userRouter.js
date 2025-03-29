const express = require("express"); // Import the Express framework
const router = express.Router(); // Create a new router instance
const userService = require("../services/userService"); // Import user service functions
//! Rutas protegidas
const passport = require("passport");
require("../middlewares/authMiddleware")(passport)
const { adminValidate } = require("../middlewares/isAdmin");


//! Root Routes
router.get("/", userService.getAllUsers)

//? Ruta de informacion propia del usuario logeado 
router.route("/me")
  .get(passport.authenticate("jwt", { session: false }), userService.getMyUser)
  .patch(passport.authenticate("jwt", { session: false }), userService.updateMyUser)
  .delete(passport.authenticate("jwt", { session: false }), userService.deleteMyUser)

//! Dynamic Routes
router.route("/:id") // Define routes that require an ID parameter
  .get(userService.getUserById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userService.patchUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userService.deleteUser
  )

router.route("/:id/updateUserRole")
.put(
  passport.authenticate("jwt",{session: false}),
  adminValidate,
  userService.updateUserRole
)

module.exports = router; // Export the router to use in other parts of the application
