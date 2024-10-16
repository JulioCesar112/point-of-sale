const usersControllers = require("./users.controllers")


const getAllUsers = async (req, res) => {
  try {
    const data = await usersControllers.getAllUsers();
    res.status(200).json(data);
  } catch (err) {
    console.error(err); // Registrar el error para depuración
    res.status(500).json({ message: "An error occurred while retrieving users." });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await usersControllers.getUserById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while retrieving the user." });
  }
};

const patchUser = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, phone, birthday, password } = req.body;

  try {
    const data = await usersControllers.updateUser(id, { firstName, lastName, phone, birthday, password });
    if (data[0]) {
      res.status(200).json({ message: `User with id: ${id} edited successfully` });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the user" });
  }
};


const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await usersControllers.deleteUsersById(id);
    if (data) {
      return res.status(204).end(); // 204 No Content, no hace falta un JSON
    } else {
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while deleting the user' });
  }
};


const registerUser = async (req, res) => {
  const { firstName, lastName, phone, email, birthday, password } = req.body;

  if (!firstName || !lastName || !phone || !email || !birthday || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = await usersControllers.createUser({ firstName, lastName, phone, email, birthday, password });
    return res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while registering the user" });
  }
};


//! My user Services

const getMyUser = async (req, res) => {
  const id = req.user.id

  try {
    const data = await usersControllers.getUserById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while retrieving the user." });
  }
}

const updateMyUser = async (req, res) => {
  const id = req.user.id
  const { firstName, lastName, phone, birthday, password } = req.body

  try {
    const data = await usersControllers.updateUser(id, { firstName, lastName, phone, birthday, password });
    if (data[0]) {
      res.status(200).json({ message: `Your user was edited successfuly` });
    } else {
      res.status(400).json({ message: "error" })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the user" });
  }
}

const deleteMyUser = async (req, res) => {
  const id = req.user.id;

  try {
    await usersControllers.deleteUsersById(id, {status:"inactive"});
    return res.status(200).json({ message: `your user was deleted successfuly` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while deleting the user" });
  }
}


module.exports = {
  getAllUsers,
  getUserById,
  patchUser,
  deleteUser,
  registerUser,
  //
  getMyUser,
  updateMyUser,
  deleteMyUser
}