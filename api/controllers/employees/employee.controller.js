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
            //Retrive business ID
        };

        const newEmployee = await Employee.create(employee);
        res.send(newEmployee);

      } catch (err) {
        res.status(500).send({
          message: err.message || "An error occurred while creating the employee."
        });
      }
    }        
    
    async findAllByBusiness(req, res) {
      try {
        const employees = await Employee.findAll({ where: { businessId: req.body.businessId } });
        res.send(employees);
      } catch (err) {
        res.status(500).send({
          message: err.message || "An error occurred while looking for employees."
        });
      }
    }

    async findById(req, res) {
      try {
        const employee = await Employee.findByPk(req.body.employeeId)
        res.send(employee);
      } catch (error) {
        res.status(500).send({
          message: err.message || "An error occurred while looking for the employee."
        });
      }
    }

    async delete(req, res) {
      try {
        const employee = await Employee.destroy({ where: { employeeId: req.body.employeeId } });
        res.send(employee);

      } catch (error) {
        res.status(500).send({
          message: err.message || "An error occurred while looking for the employee."
        });
      }
    }
}

module.exports = EmployeeController;