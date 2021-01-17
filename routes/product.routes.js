const ProductController = require('../api/controllers/products/product.controller');
const controller = new ProductController();

module.exports = (app) => {

  let router = require("express").Router();

  // Create a product
  router.post("/", controller.createProduct);

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/products', router)
}