const db = require('../../../sequelize');
const Employee = db.Employees;
//TODO: Should we attach the employee id of who fulfilled an order?
class EmployeeController {
    async createEmployee(req, res) {
      try {
        if (!req.body.phoneNum) {
          res.status(400).send({
              message: "Please enter your phone number."
          })
        }

        const employee = {
            employeeId: req.body.employeeId,
            phoneNum: req.body.phoneNum
        };

        const newEmployee = await Employee.create(employee);
        res.send(newEmployee);

      } catch(err){
        res.status(500).send({
          message: err.message || "An error occurred while creating the employee."
        });
      }        
    }
}

module.exports = EmployeeController;