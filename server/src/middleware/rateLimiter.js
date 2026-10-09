const {rateLimit} = require("express-rate-limit")


const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 25,
    legacyHeaders: false,
    keyGenerator: (req) => {
        return req.user?.id ?? req.ip
    }
})

module.exports = apiLimiter