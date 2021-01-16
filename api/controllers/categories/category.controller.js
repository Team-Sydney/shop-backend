'use strict'

const db = require('../../../models');
const Category = db.category;


class CategoryController {
  createCategory(req, res) {
    if(!req.body.name) {
      res.status(400).send({
        message: "Please enter the name of the category."
      });
      return;
    }

    const category = {
      catid: req.body.catid,
      name: req.body.name
    };

    Category.create(category)
      .then(data => {
        res.send(data);
      }) 
      .catch(err => {
        res.status(500).send({
          message: 
            err.message || "An error occurred while creating the category."
        })
      })
  }
}

module.exports = CategoryController;