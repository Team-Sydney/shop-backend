module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('Orders', {
    oid: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cid: {
      type: Sequelize.INTEGER,
    },
    bid: {
      type: Sequelize.INTEGER,
    },
    qrCode: {
      type: Sequelize.TEXT,
    }
  });

 
  return Order;
};

