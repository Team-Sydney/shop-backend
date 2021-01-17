const CategoryController = require('../api/controllers/categories/category.controller.js');
const OrderController = require('../api/controllers/orders/order.controller.js');
const controller = new OrderController();

module.exports = (app) => {
  
  let router = require("express").Router();

  router.post("/", controller.createOrder);

  router.get("/:id", controller.findOne);

  router.get("/", controller.findAll);

  router.get("/business/:id", controller.findByBusiness); //Only available for businesses

  router.get("/customer/:id", controller.findByCustomer);

  router.get("/qr/:id", controller.findByQRCode);

  router.delete("/:id", controller.delete);

  app.use('/api/orders', router);
}