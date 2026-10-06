const Service = require("../models/Service")


async function getServices(req,res) {
    const services = await Service.find()
    res.status(200).json(services)
}

async function createService(req, res) {
    const service = await Service.create({
        name: req.body.name,
        url: req.body.url
    });

  res.status(201).json(service);
}


async function getServiceById(req,res) {
    const service = await Service.findById(req.params.id)

    if(!service) {
        res.status(404).json({message: `Service with ID ${req.params.id} not found`})
        return
    }

    res.status(200).json(service)
}
module.exports = {getServices, getServiceById, createService}