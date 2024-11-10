const { loginUser } = require("../controllers/authController")
const jwt = require("jsonwebtoken")
const config = require("../config/env")


const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const result = await loginUser(email, password)

    if (result.success) {

      const token = jwt.sign({
        id: result.user.id,
        email: result.user.email,
        role:result.user.role
      },
        config.jwtsecret
      )

      return res.status(200).json({ token })

    } else {
      return res.status(400).json(result)
    }


  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ message: "Login failed", error: error.message })
  }
}


module.exports = {
  login
}