const db = require('../../../sequelize');
const Customer = db.Customers;
const Vehicle = db.Vehicles;
const Order = db.Orders;

class CustomerController {
    createCustomer(req, res) {
        if (!req.body.phoneNum) {
            res.status(400).send({
                message: "Please enter your phone number."
            })
        }
        const customer = {
            customerId: req.body.customerId,
            phoneNum: req.body.phoneNum
        };

        Customer.create(customer)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the customer."
                })
            })
    }

    findAll(req, res) {
        Customer.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all customers.'
                });
            });
    }

    findOne(req, res) {
        const id = req.params.id;

        Customer.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this customer."
                });
            });
    }

    findByUID(req, res) {
        const id = req.params.id;
        Customer.findOrCreate({
                where: { customerId: id }
            })
            .then(customer => {
                const created = customer[1];
                const custId = customer[0].customerId;

                return Customer.findOne({
                    where: { customerId: custId },
                    include: [{
                        model: Vehicle,
                        where: { customerId: custId },
                        required: false
                    }, {
                        model: Order,
                        where: { customerId: custId },
                        required: false
                    }]
                })
            })
            .then(data => {
                console.log(data)
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all Customers for this business.'
                });
            });
    }

    delete(req, res) {
        const id = req.params.id;

        Customer.destroy({
                where: { customerId: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The customer was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this customer could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                console.log(id)
                res.status(500).send({
                    message: "Unable to delete this customer."
                })
            })
    }
}

module.exports = CustomerController;