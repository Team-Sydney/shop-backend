const db = require('../../../models');
const Order = db.order;
const Customer = db.customer;
const { sendSMS } = require('../../../services/notifications/index');
const { sendNotification } = require('../../../services/messaging/index')

class OrderController {
  //To do: retrieve business ID to find token and send notification
  //       look back at order model and divide into 2 models
  createOrder(req, res) {
    let token = req.body.token;
    const order = {
      cid: req.body.cid,
      bid: req.body.bid,
      status: req.body.status,
      qrCode: req.body.qrCode
    };

    Order.create(order)
      .then(data => {
        sendNotification(token, "New order, please confirm.")
        res.send(data);
      }) 
      .catch(err => {
        res.status(500).send({
          message: 
            err.message || "An error occurred while creating the order."
        })
    })
  }

  findOne(req, res) {
    const id = req.params.id;

    Order.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Unfortunately we were unable to retrieve this order."
        })
    })
  }

  findAll(req, res) {
    Order.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all orders.'
        });
      });
  }
  
  findByBusiness(req, res) {
      const id = req.params.id;

      Order.findAll({ 
        where: { bid: id } 
      })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || 'Unfortunately we were unable to retrieve all orders for this business.'
          });
        });
  }

  findByCustomer(req, res) {
    const id = req.params.id;

    Order.findAll(req.body, {
      where: { cid: id }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all orders for this customer.'
        })
      });
  }

  findByQRCode(req, res) {
    const qrCode = req.params.qrCode

    Order.findOne(req.body, {
      where: { qrCode: qrCode }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all orders for this qr code.'
        })
      });
  }

  async confirmOrder(req, res){
    const id = req.params.id;
    
    let order = await Order.findOne({ where: {oid: id } });

    if(order.status){ 
      res.status(400).send({
        message: "Order has already been completed."
      });
      return;
    }
    Order.update(
      { status: true },
      { where: { oid: order.oid } })
      .then(async num => {
        if(num == 1) {
          res.send({
            message: "The order has been updated successfully"
          });
          let customer = await Customer.findOne({ where: { cid: order.cid } });
          sendSMS(customer.phoneNum, "Your order is ready, please come at your designated pick-up time.")
        } else {
          res.send({
            message: "Unfortunately this order could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to update this order."
        })
      })
  }
  
  delete(req, res) {
    const id = req.params.id;

    Order.destroy({
        where: { oid: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "The order was deleted successfully!"
            });
        } else {
            res.send({
                message: "Unfortunately this order could not be found, please double check the ID."
            });
        }
    })
    .catch(err => {
        console.log(id)
        res.status(500).send({
            message: "Unable to delete this order."
        })
    })
  }
}

module.exports = OrderController;