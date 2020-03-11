const express = require("express")
const app = express()
const router = express.Router()
const path = require("path")
const morgan = require("morgan")
const fs = require("fs")
const db = require("./db")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
app.use(bodyParser.json())

app.use(express.static("assets"))
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/index.html"))
})

app.get("/api/things", (req, res, next) => {
  db.getThings().then(response => res.send(response))
})

app.get("/api/users", (req, res, next) => {
  db.getThings().then(response => res.send(response))
})

app.get("/api/things/:id", (req, res, next) => {
  db.getThing(req.params.id).then(response => res.send(response))
})

app.post("/api/", (req, res, next) => {
  console.log("wow")
})
app.delete("/api/things/:id", (req, res, next) => {
  db.deleteThing(req.params.id).then(response => res.sendStatus(200))
})
app.put("/api/", (req, res, next) => {
  db.updateThing().then(response => res.send(response))
})

db.sync()
  .then(() => {
    console.log("db synced")
    app.listen(port, () => console.log(`listening on port ${port}`))
  })
  .catch(ex => console.log(ex))
