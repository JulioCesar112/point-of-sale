const bcrypt = require("bcrypt")
const saltRounds = 10

const hashPassword = async (plainPassword) => {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds)
    return hashedPassword
  } catch (error) {
    console.error("Error hashing the password:", error)
  }
}

const comparePassword = async (plainPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword)
    return isMatch
  } catch (error) {
    console.error("Error comparing passwords:", error)
    return false
  }
}

module.exports = {
  hashPassword,
  comparePassword
}
