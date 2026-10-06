const mongoose = require("mongoose")
const process = require("node:process")

async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDB connected")
    } catch(error)
    {
       console.error("MongoDB connection failed:", mongoose.Error.message);
       throw error
    }
}

module.exports = connectDB