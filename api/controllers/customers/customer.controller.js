const db = require('../../../models');
const Customer = db.customer;
const Vehicle = db.vehicle;

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
      Customer.findAll(req.body, { 
        where: { uid: id },
        include: [{
          model: Vehicle,
          where: { cid : cid}
        }] 
      })
      .then(data => {
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