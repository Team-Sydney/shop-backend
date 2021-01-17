const CategoryController = require('../api/controllers/categories/category.controller');
const controller = new CategoryController();

module.exports = (app) => {

  let router = require("express").Router();

  // Create a category
  router.post("/", controller.createCategory);

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/categories', router)
}