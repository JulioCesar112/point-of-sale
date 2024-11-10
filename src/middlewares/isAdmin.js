
const adminValidate = (req, res, next) => {
 
  const role = req.user.role

  if (role === "admin") {
    return next()
  } else {
    return res.status(401).json({ message: "Access denied: You do not have admin privileges."})
  }

}

module.exports = {
  adminValidate
}