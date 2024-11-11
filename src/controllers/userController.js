const uuid = require("uuid");
const Users = require("../models/userModel");
const { hashPassword } = require("../utils/crypto");

const getAllUsers = async () => {
  try {
    const data = await Users.findAll({
      where: {
        status: "active",
      },
    });
    return data;
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    throw new Error("Could not retrieve users.");
  }
};

const getUserById = async (id) => {
  try {
    const data = await Users.findOne({
      where: {
        id,
        status: "active",
      },
    });
    return data;
  } catch (error) {
    console.error("Error in getUserById:", error);
    throw new Error(`Could not retrieve user with ID: ${id}`);
  }
};

const createUser = async (data) => {
  const hashedPassword = await hashPassword(data.password);

  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashedPassword, // Use the hashed password
    phone: data.phone,
    birthday: data.birthday,
  });
  return newUser;
};

const updateUser = async (id, data) => {
  try {
    const result = await Users.update(data, {
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in updateUser:", error);
    throw new Error("Could not update the user.");
  }
};

const deleteUserById = async (id) => {
  try {
    const data = await Users.destroy({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    console.error("Error in deleteUserById:", error);
    throw new Error("Could not delete the user.");
  }
};

const getUserByEmail = async (email) => {
  try {
    const data = await Users.findOne({
      where: {
        email,
        status: "active",
      },
    });
    return data;
  } catch (error) {
    console.error("Error in getUserByEmail:", error);
    throw new Error(`Could not retrieve user with email: ${email}`);
  }
};

const updateUserRoleService = async (id, role) => {
  try {
    const user = await Users.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    user.role = role;
    await user.save();
    return user;
  } catch (error) {
    console.error("Error in updateUserRoleService:", error);
    throw new Error("Could not update user role.");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  getUserByEmail,
  updateUserRoleService
};
