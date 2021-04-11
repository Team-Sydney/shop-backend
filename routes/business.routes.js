const BusinessController = require('../api/controllers/businesses/business.controller');
const controller = new BusinessController();

module.exports = (app) => {

  var router = require("express").Router();

  // Create a business
  router.post("/", controller.createBusiness);

  router.get("/uid/:id", controller.findBusinessProductsOrdersById)

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/businesses', router)
}