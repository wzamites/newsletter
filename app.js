const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")
})
//
// app.get("")
//
app.post("/", function(req, res) {

  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)

  const result = num1 + num2
  res.send("It's " + result)
})

app.listen(3000, function() {
  console.log("Running")
})
