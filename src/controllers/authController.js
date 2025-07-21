const userControllers = require("../controllers/userController");
const { comparePassword } = require("../utils/crypto");

const loginUser = async (email, password) => {

  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  try {
    const user = await userControllers.getUserByEmail(email);
    if (!user) {
      return {
        success: false,
        message: 'User not found.'
      };
    }

    const verifyPassword = await comparePassword(password, user.password);
    if (!verifyPassword) {
      return { success: false, message: "Invalid password." };
    }
    // retorna status exito y dato
    return { success: true, user };

  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};


module.exports = {
  loginUser
};
