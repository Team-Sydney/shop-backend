const CategoryController = require('../api/controllers/categories/category.controller.js');
const controller = new CategoryController();

module.exports = (app) => {

  var router = require("express").Router();

  // Create a category
  router.post("/", controller.createCategory);

  app.use('/api/categories', router)
}