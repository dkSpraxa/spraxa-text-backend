const express = require("express")
const cors = require("cors")
const app = express()
const error = require("./middleware/error")
const userRoutes = require("./routes/userRoutes")
const noteRoutes = require("./routes/noteRoutes")

app.use(express.json())
app.use(cors())

//API
app.use("/api/v1",userRoutes)
app.use("/api/v1",noteRoutes)

app.use(error)

module.exports = app;
