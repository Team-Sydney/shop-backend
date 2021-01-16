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
        });
      });
  }

  findOne(req, res) {
    const id = req.params.id;

    Category.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Unfortunately we were unable to retrieve this category."
        });
      });
  }

  findAll(req, res) {
    Category.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all categories.'
        });
      });
  }

  update(req, res) {
    const id = req.params.id;

    Category.update(req.body, {
      where: { catid: id }
    })
      .then(num => {
        if(num == 1) {
          res.send({
            message: "The category has been updated successfully"
          });
        } else {
          res.send({
            message: "Unfortunately this category could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to delete this category."
        })
      })
  }

  delete(req, res) {
    const id = req.params.id;

    Category.destroy({
      where: { catid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "The category was deleted successfully!"
          });
        } else {
          res.send({
            message: "Unfortunately this category could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        console.log(id)
        res.status(500).send({
          message: "Unable to delete this category."
        })
      })
  }
}

module.exports = CategoryController;