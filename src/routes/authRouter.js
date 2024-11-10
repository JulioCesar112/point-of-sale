//? Auth va a ontener las rutas de autorizacion y autenticacion
//* Login
//* Register
//* Recovery password
//* Verify User

const express = require("express")
const router = express.Router() 

const userService = require("../services/userService")
const authService = require("../services/authService")
// ? prefijo 
// ? /api/v1/auth

router.post("/register", userService.registerUser)
router.post("/login", authService.login)

module.exports = router
