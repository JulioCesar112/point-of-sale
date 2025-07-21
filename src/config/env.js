if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbName: process.env.DB_NAME

  },
  jwtsecret: process.env.JWT_SECRET
}


module.exports = config