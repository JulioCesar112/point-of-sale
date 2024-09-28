const express = require("express")
const app = express()
const cors = require("cors")
const port = 9000
app.use(cors())
const db = require("./utils/database")

const config = require("./config")
const userRouter = requre("./users/users.router.js")

app.use("api/v1/users",userRouter)

db.authenticate()
.then(() => console.log('Connection to the database has been established successfully.'))
.catch(err => console.log('Unable to connect to the database:', err))
db.sync({alter:true})
.then(() => console.log("DB Synced"))
.catch(err => console.log("ERRO!",err))


app.get("/", (req,res) => {
  res.status(200).json({message:"OK!"})
})

app.listen(port, () => {
  console.log(`Server started at port ${config.port}`)
})