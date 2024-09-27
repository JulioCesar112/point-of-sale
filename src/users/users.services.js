const usersControllers = require("./users.controllers")


const getAllUsers = (req, res) => {
  usersControllers.getAllUsers()
  .then(res => {
    res.status(200).json(res)
  })
  .catch(err => {
    res.status(400).json({message:err.message})
  })
}