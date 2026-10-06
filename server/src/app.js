const express = require("express")
const serviceRouter = require("./routes/serviceRoutes")
const apiLimiter = require("./middleware/rateLimiter")

const app = express()

app.use(express.json())


app.use("/api/services", apiLimiter, serviceRouter)

module.exports = app
