const usersControllers = require("./users.controllers")


const getAllUsers = (req, res) => {
  usersControllers.getAllUsers()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      console.error(err); // Registrar el error para depuración
      res.status(500).json({ message: "An error occurred while retrieving users" });
    })
}

const getUserById = (req, res) => {
  const id = req.params.id

  usersControllers.getUserById(id)
    .then(data => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).json(console.log({ message: err.message }))
    })
}

const patchUser = (req, res) => {
  const id = req.params.id
  const { firsName, lastName, phone, birthday, password } = req.body

  usersControllers.updateUser(id, { firsName, lastName, phone, birthday, password })
    .then(data => {
      if (data[0]) {
        res.status(200).json({ Message: `User with id: ${id} edited Succesfully` })
      } else {
        res.status(404).json({ message: "User not found" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "An error occurred while updating the user" });
    })

}

const deleteUser = (req, res) => {
  const id = req.params.id

  usersControllers.deleteUsersById(id)
    .then((data) => {
      if (data) {
        res.status(204).json({ message: `User with ID ${id} has been deleded` })
      } else {
        res.status(404).json({ message: `User whit ID ${id} not found` })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'An error occurred while deleting the user' })
    })
}

const registerUser = (req, res) => {
  const { firstName, lastName, phone, email, birthday, password } = req.body;

  // Validación de campos obligatorios
  if (firstName && lastName && phone && email && birthday && password) {
    usersControllers.createUser({ firstName, lastName, phone, email, birthday, password })
    .then(newUser => {
      res.status(201).json({ message: "User registered successfully", user: newUser });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "An error occurred while registering the user" });
    });
  } else {
    res.status(500).json({message:"error"})
  }

  // Llama a la función del controlador para crear el usuario
  
};


module.exports = {
  getAllUsers,
  getUserById,
  patchUser,
  deleteUser,
  registerUser
}