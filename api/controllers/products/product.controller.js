const db = require('../../../sequelize');
const Product = db.Products;
const { uploadImageFile } = require('../../../services/uploads/index');


class ProductController {
    createProduct(req, res) {
        if (!req.body.name) {
            res.status(400).send({
                message: "Please enter the name of the product."
            });
            return;
        }

        const product = {
            productId: req.body.productId,
            businessId: req.body.businessId,
            name: req.body.name,
            categoryId: req.body.categoryId,
            quantity: req.body.quantity,
            price: req.body.price,
            desc: req.body.desc,
            photoURL: req.body.photoURL,
        };

        Product.create(product)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the product."
                });
            });
    }

    uploadProductPhoto(req, res) {
        const id = req.params.id;

        if (!req.file) {
            res.status(400).send('No file uploaded.');
            return;
        }

        // upload photo
        uploadImageFile(req.file)
            .then(publicUrl => {
                // update product with image url
                Product.update({ photoURL: publicUrl }, {
                        where: { productId: id }
                    })
                    .then(num => {
                        if (num == 1) {
                            res.send({
                                message: "The product photo has been updated successfully"
                            });
                        } else {
                            res.status(400).send({
                                message: "Unfortunately this product could not be found, please double check the ID."
                            });
                        }
                    })
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unable to update this product."
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
                    message: err.message || 'Unfortunately we were unable to retrieve all products.'
                });
            });
    }

    update(req, res) {
        const id = req.params.id;

        Product.update(req.body, {
                where: { productId: id }
            })
            .then(num => {
                if (num == 1) {
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
                    message: "Unable to update this product."
                })
            })
    }

    delete(req, res) {
        const id = req.params.id;

        Product.destroy({
                where: { productId: id }
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