const db = require('../../../models');
const Order = db.Order;

class OrderController {
    createOrder(req, res) {
        const order = {
          oid: req.body.oid,
          cid: req.body.cid,
          qrCode: req.body.qrCode
        };
    
        Order.create(order)
          .then(data => {
            res.send(data);
          }) 
          .catch(err => {
            res.status(500).send({
              message: 
                err.message || "An error occurred while creating the order."
            })
        })
    }

    
    deleteOrder(req, res) {
        const orderID = req.body.oid;

        // Order.deleteOrder
    }
}