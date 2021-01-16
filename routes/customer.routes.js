const CustomerController = require('../api/controllers/customers/customer.controller.js');
const controller = new CustomerController();

module.exports = (app) => {

  let router = require("express").Router();

  router.post("/", controller.createCustomer);

  router.get("/:id", controller.findOne);

  router.get("/user/:id", controller.findByUID);

  app.use('/api/controllers', router)
}