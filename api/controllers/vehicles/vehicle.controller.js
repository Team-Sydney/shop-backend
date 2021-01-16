const db = require('../../../models');
const { body, validationResult } = require('express-validator/check')
const Vehicle = db.vehicle;


class VehicleController {
  validate(method) {
    switch(method) {
      case 'createVehicle': {
        return [
          body('brand', 'The brand is required').exists(),
          body('color', 'The color is required').exists(),
          body('model', 'The model is required').exists(),
          body('license', 'The license plate is required').exists(),
        ]
      }
    }
  }

  createVehicle(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const vehicle = {
        cid: req.body.cid,
        brand: req.body.brand,
        color: req.body.color,
        model: req.body.model,
        license: req.body.license
      };
  
      Vehicle.create(vehicle)
        .then(data => {
          res.send(data);
        }) 
        .catch(err => {
          res.status(500).send({
            message: 
              err.message || "An error occurred while creating the vehicle."
        });
      });

    } catch (err) {
      return next(err)
    }
  }

  findOne(req, res) {
    const id = req.params.id;

    Vehicle.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Unfortunately we were unable to retrieve this vehicle."
      });
    });
  }

  findAll(req, res) {
    Vehicle.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all vehicles.'
      });
    });
  }

  update(req, res) {
    const id = req.params.id;

    Vehicle.update(req.body, {
      where: { catid: id }
    })
      .then(num => {
        if(num == 1) {
          res.send({
            message: "The vehicle has been updated successfully"
          });
        } else {
          res.send({
            message: "Unfortunately this vehicle could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to delete this vehicle."
      })
    })
  }

  delete(req, res) {
    const id = req.params.id;

    Vehicle.destroy({
      where: { vid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "The vehicle was deleted successfully!"
          });
        } else {
          res.send({
            message: "Unfortunately this vehicle could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        console.log(id)
        res.status(500).send({
          message: "Unable to delete this vehicle."
      })
    })
  }
}

module.exports = VehicleController;