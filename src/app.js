const express = require("express")
const app = express()
const cors = require("cors")
const port = 9000
app.use(cors())

const config = require("./config")



app.get("/", (req,res) => {
  res.status(200).json({message:"OK!"})
})

app.listen(port, () => {
  console.log(`Server started at port ${config.port}`)
})