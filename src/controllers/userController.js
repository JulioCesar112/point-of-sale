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
    console.error("Error en getAllUsers:", error);
    throw new Error("No se pudieron obtener los usuarios.");
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
    console.error("Error en getUserById:", error);
    throw new Error(`No se pudo obtener el usuario con ID: ${id}`);
  }
};

const createUser = async (data) => {

  const hashedPassword = await hashPassword(data.password);

  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashedPassword, // Usa el hash de la contraseña
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
    console.error("Error en updateUser:", error);
    throw new Error("No se pudo actualizar el usuario.");
  }
};

const deleteUsersById = async (id) => {
  try {
    const data = await Users.destroy({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    console.error("Error en deleteUsersById:", error);
    throw new Error("No se pudo eliminar el usuario.");
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
    console.error("Error en getUserByEmail:", error);
    throw new Error(`No se pudo obtener el usuario con el correo: ${email}`);
  }
};

const updateUserRoleServise = async (id, role) => {
  try {
    const user = await Users.findByPk(id)
    user.role = role
    await user.save()

  } catch (error) {
    console.error("Error updating user role:", error);
    throw new Error("Error updating role")
  }
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUsersById,
  getUserByEmail,
  updateUserRoleServise
};
