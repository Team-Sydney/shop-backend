
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('Orders', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    activated: {
      type: Sequelize.BOOLEAN
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING
    },
  });

 
  return Order;
};

