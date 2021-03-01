module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('Orders', {
    orderId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customerId: {
      type: Sequelize.INTEGER,
    },
    businessId: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    qrCode: {
      type: Sequelize.TEXT,
    },
    orderDate: {
      type: Sequelize.DATE
    }
  });

  return Order;
};

