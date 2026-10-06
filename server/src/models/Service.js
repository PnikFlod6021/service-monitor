const mongoose = require("mongoose")

const serviceSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    healthy: {
        type: Boolean,
        default: true
    }
})

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service