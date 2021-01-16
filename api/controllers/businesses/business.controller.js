const db = require('../../../models');
const Business = db.business;


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
      name: req.body.name
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