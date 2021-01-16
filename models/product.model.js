module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('Products', {
    pid: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    bid: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    catid: {
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

