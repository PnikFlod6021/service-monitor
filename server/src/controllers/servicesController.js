const Service = require("../models/Service")
const HealthCheck = require("../models/HealthCheck")


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

async function checkService(req, res) {
    const service = await Service.findById(req.params.id);

    if (!service) {
        return res.status(404).json({
            message: `Service with ID ${req.params.id} not found`
        });
    }

    const start = Date.now();

    try {
        const response = await fetch(service.url, {
            signal: AbortSignal.timeout(5000)
        });

        const latency = Date.now() - start;
        const status = response.ok ? "healthy" : "unhealthy";

        service.status = status;
        service.lastCheckedAt = new Date();

        await service.save();

        const healthCheck = await HealthCheck.create({
            service: service._id,
            status,
            statusCode: response.status,
            latency
        });

        return res.status(200).json(healthCheck);

    } catch (error) {
        const latency = Date.now() - start;

        service.status = "unhealthy";
        service.lastCheckedAt = new Date();

        await service.save();

        const healthCheck = await HealthCheck.create({
            service: service._id,
            status: "unhealthy",
            statusCode: null,
            latency,
            error: error.message
        });

        return res.status(200).json(healthCheck);
    }
}

async function getHealthChecksForService(req, res) {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                message: `Service with ID ${req.params.id} not found`
            });
        }

        const checks = await HealthCheck.find({
            service: service._id
        }).sort({ createdAt: -1 });

        return res.status(200).json(checks);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {getServices, getServiceById, createService, checkService, getHealthChecksForService}