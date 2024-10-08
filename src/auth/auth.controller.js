const userControllers = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypto");

const loginUser = async (email, password) => {
  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  try {
    const user = await userControllers.getUserByEmail(email);
    if (!user) {
      return { success: false, message: 'User not found.' };
    }

    const verifyPassword = comparePassword(password, user.password);
    if (verifyPassword) {
      return { success: true, user };
    }

    return { success: false, message: 'Invalid credentials.' };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};

module.exports = loginUser;
