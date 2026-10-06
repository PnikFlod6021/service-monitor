const express = require("express")

const {getServices, getServiceById, createService} = require("../controllers/servicesController")


const router = express.Router()



router.get("/", getServices)
router.post("/", createService)
router.get("/:id", getServiceById)

module.exports = router