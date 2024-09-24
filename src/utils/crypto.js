const bcrypt = require("bcrypt")

const hashPassword = (plainPassword) => {
  const hashedPassword = bcrypt.hashSync(plainPassword,10)
  return hashedPassword
}

const comparePassword = (plainPassword, hashedPassword) =>{
  const compare = bcrypt.compareSync(plainPassword,hashedPassword)
  return compare
}
// este es un ejemplo de como se estara utilizando o como fuciona bcrypt
// console.log(hashPassword("root"))
// console.log(comparePassword("root",`$2b$10$.mlNiugEk1S8F9YsvIfXyuJDEj85eLJ7NM6gt4IckDom.44zt0DrO`))

module.exports = {
  hashPassword,
  comparePassword
}