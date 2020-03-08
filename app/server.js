const express = require("express")
const app = express()
const router = express.Router()
const path = require("path")
const morgan = require("morgan")
const fs = require("fs")
const db = require("./db")
const bodyParser = require("body-parser")

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
app.use(bodyParser.json())

app.use(express.static("assets"))
app.get("", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"))
})

db.sync()
  .then(() => {
    console.log("db synced")
  })
  .catch(ex => console.log(ex))
