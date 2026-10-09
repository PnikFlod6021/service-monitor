const mongoose = require("mongoose")

const serviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["healthy", "unhealthy", "unknown"],
            default: "unknown"
        },
        lastCheckedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service