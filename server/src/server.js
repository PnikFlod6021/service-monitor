
const { errorMonitor } = require("node:events");
const app = require("./app");
const connectDB = require("./config/db");
const process = require("node:process")

process.loadEnvFile("./server/.env");

const PORT = process.env.PORT || 3000;

async function initServer() {
  try {
    await connectDB()

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

initServer();