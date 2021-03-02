module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('Products', {
    productId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    businessId: {
      type: Sequelize.INTEGER
    },
    productName: {
      type: Sequelize.STRING
    },
    categoryId: {
      type: Sequelize.INTEGER
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.DOUBLE
    },
    desc: {
      type: Sequelize.TEXT
    },
    photoURL: {
      type: Sequelize.TEXT
    }
  });

 
  return Product;
};

