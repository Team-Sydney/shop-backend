const db = require('../../../models');
const Business = db.business;

const Product = db.product;
const Order = db.order;


class BusinessController {
  createBusiness(req, res) {
    if(!req.body.name) {
      res.status(400).send({
        message: "Please enter the name of the business."
      });
      return;
    }

    const business = {
      bid: req.body.bid,
      uid: req.body.uid,
      name: req.body.name,
      address: req.body.address,
      phoneNum: req.body.phoneNum,
      openTime: req.body.openTime,
      closeTime: req.body.closeTime
    };

    Business.create(business)
      .then(data => {
        res.send(data);
      }) 
      .catch(err => {
        res.status(500).send({
          message: 
            err.message || "An error occurred while creating the business."
        });
      });
  }

  // when business user logs in with uid
  // if uid empty  create entry with uid autoincrement bid
  // else , returns business info , all products, and all orders
  findBusinessProductsOrdersByUid(req, res) {
    const myUid = req.params.id;

    Business.findOrCreate({
        where: { uid: myUid }
      })
      .then(data => {
        const businessId = data[0].bid;
        
        return Business.findOne({
          where: { bid: businessId },
          include: [{
            model: Order,
            where: { bid: businessId },
            required: false
          }, {
            model: Product,
            where: { bid: businessId },
            required: false
          }]
        })
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "An error occurred while retrieving or creating this business."
        });
      });
  }

  findOne(req, res) {
    const id = req.params.id;

    Business.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Unfortunately we were unable to retrieve this business."
        });
      });
  }

  findAll(req, res) {
    Business.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all businesses.'
        });
      });
  }

  update(req, res) {
    const id = req.params.id;

    Business.update(req.body, {
      where: { bid: id }
    })
      .then(num => {
        if(num == 1) {
          res.send({
            message: "The business has been updated successfully"
          });
        } else {
          res.send({
            message: "Unfortunately this business could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to delete this business."
        })
      })
  }

  delete(req, res) {
    const id = req.params.id;

    Business.destroy({
      where: { bid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "The business was deleted successfully!"
          });
        } else {
          res.send({
            message: "Unfortunately this business could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        console.log(id)
        res.status(500).send({
          message: "Unable to delete this business."
        })
      })
  }
}

module.exports = BusinessController;