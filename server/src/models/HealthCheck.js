const mongoose = require("mongoose");

const healthCheckSchema = mongoose.Schema(
    {
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
            required: true
        },

        status: {
            type: String,
            enum: ["healthy", "unhealthy"],
            required: true
        },

        statusCode: {
            type: Number,
            default: null
        },

        latency: {
            type: Number,
            default: null
        },

        error: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const HealthCheck = mongoose.model(
    "HealthCheck",
    healthCheckSchema
);

module.exports = HealthCheck;