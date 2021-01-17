const db = require('../../../models');
const Customer = db.customer;
const Vehicle = db.vehicle;
const Order = db.order;

class CustomerController {
  createCustomer(req, res) {
    if(!req.body.phoneNum){
      res.status(400).send({
        message: "Please enter your phone number."
      })
    }
    const customer = {
      cid: req.body.cid,
      uid: req.body.uid,
      phoneNum: req.body.phoneNum
    };

    Customer.create(customer)
      .then(data => {
        res.send(data);
      }) 
      .catch(err => {
        res.status(500).send({
          message: 
            err.message || "An error occurred while creating the customer."
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
          message:
            err.message || 'Unfortunately we were unable to retrieve all customers.'
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
        where: { uid: id }
      })
      .then(customer => {
        const created = customer[1];
        const custId = customer[0].cid;

        return Customer.findOne({
          where: { cid: custId },
          include: [{
            model: Vehicle,
            where: { cid: custId },
            required: false
            }, {
            model: Order,
            where: { cid: custId },
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
          message:
            err.message || 'Unfortunately we were unable to retrieve all Customers for this business.'
        });
    });
  }
}

module.exports = CustomerController;