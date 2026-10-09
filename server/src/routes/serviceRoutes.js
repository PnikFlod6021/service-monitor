const express = require("express")

const {getServices, getServiceById, createService, checkService, getHealthChecksForService} = require("../controllers/servicesController")


const router = express.Router()



router.get("/", getServices)
router.post("/", createService)
router.get("/:id", getServiceById)
router.post("/:id/checks", checkService)
router.get("/:id/checks", getHealthChecksForService)

module.exports = router