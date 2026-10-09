const express = require("express")
const serviceRouter = require("./routes/serviceRoutes")
const apiLimiter = require("./middleware/rateLimiter")
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:5173"
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())


app.use("/api/services", apiLimiter, serviceRouter)

module.exports = app
