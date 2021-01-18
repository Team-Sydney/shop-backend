const VehicleController = require('../api/controllers/vehicles/vehicle.controller.js');
const controller = new VehicleController();

module.exports = (app) => {

  let router = require("express").Router();

  // Create a vehicle
  router.post("/", controller.validate('createVehicle'), controller.createVehicle);

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/vehicles', router)
}