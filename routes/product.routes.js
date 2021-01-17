const ProductController = require('../api/controllers/products/product.controller');
const controller = new ProductController();
const Multer = require('multer');

// Multer is required to process file uploads and make them available via
// req.files.
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
  });

module.exports = (app) => {

  let router = require("express").Router();

  // Create a product
  router.post("/", controller.createProduct);

  router.post("/photo/:id", multer.single('file'), controller.uploadProductPhoto)

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/products', router)

}