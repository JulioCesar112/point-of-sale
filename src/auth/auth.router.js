//? Auth va a ontener las rutas de autorizacion y autenticacion
//* Login
//* Register
//* Recovery password
//* Verify User

const express = require("express")
const router = express.Router() 

const usersServices = require("../users/users.services")
const authServices = require("./auth.services")
// ? prefijo 
// ? /api/v1/auth

router.post("/register", usersServices.registerUser)
router.post("/login", authServices.login)

module.exports = router
