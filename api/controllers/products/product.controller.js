const db = require('../../../models');
const Product = db.product;


class ProductController {
  createProduct(req, res) {
    if(!req.body.name) {
      res.status(400).send({
        message: "Please enter the name of the product."
      });
      return;
    }

    const product = {
      pid: req.body.pid,
      bid: req.body.bid,
      name: req.body.name
    };

    Product.create(product)
      .then(data => {
        res.send(data);
      }) 
      .catch(err => {
        res.status(500).send({
          message: 
            err.message || "An error occurred while creating the product."
        });
      });
  }

  findOne(req, res) {
    const id = req.params.id;

    Product.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Unfortunately we were unable to retrieve this product."
        });
      });
  }

  findAll(req, res) {
    Product.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all products.'
        });
      });
  }

  update(req, res) {
    const id = req.params.id;

    Product.update(req.body, {
      where: { pid: id }
    })
      .then(num => {
        if(num == 1) {
          res.send({
            message: "The product has been updated successfully"
          });
        } else {
          res.send({
            message: "Unfortunately this product could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to delete this product."
        })
      })
  }

  delete(req, res) {
    const id = req.params.id;

    Product.destroy({
      where: { pid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "The product was deleted successfully!"
          });
        } else {
          res.send({
            message: "Unfortunately this product could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        console.log(id)
        res.status(500).send({
          message: "Unable to delete this product."
        })
      })
  }
}

module.exports = ProductController;