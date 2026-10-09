
const app = require("./app")
const connectDB = require("./config/db")
const process = require("node:process")
let server 

process.loadEnvFile("./.env")

const PORT = process.env.PORT || 3000

async function initServer() {
  try {
    await connectDB()

    server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    });
  } catch (error) {
    console.error("Failed to start server:", error)
    process.exit(1)
  }
}

initServer();

process.on("SIGTERM", () => {
  server.close()
})

process.on("SIGINT", () => {
  server.close()
})

process.on("SIGKILL", () => {
  server.close()
})