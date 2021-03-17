const EmployeeController = require('../api/controllers/employees/employee.controller.js');
const controller = new EmployeeController();

module.exports = (app) => {

  let router = require("express").Router();

  router.post("/", controller.createEmployee);

  router.get("/business/:id", controller.findAllByBusiness);

  router.get("/user/:id", controller.findById);

  router.delete("/user/:id", controller.delete);

  app.use('/api/employees', router);
}
