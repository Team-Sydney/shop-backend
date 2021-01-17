module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('Orders', {
    oid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cid: {
      type: Sequelize.INTEGER,
    },
    bid: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    qrCode: {
      type: Sequelize.TEXT,
    }
  });

 
  return Order;
};

