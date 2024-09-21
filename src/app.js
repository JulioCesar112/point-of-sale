const express = require("express")
const app = express()
const port = 9000
const cors = require("cors")


app.use(cors())
app.get("/", (req,res) => {
  res.status(200).json({message:"OK!"})
})

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})