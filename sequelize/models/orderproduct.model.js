module.exports = (sequelize, Sequelize) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    //oid
    //pid
    quantity: {
      type: Sequelize.INTEGER
    }
  }, { timestamps: false });

  return OrderProduct;
};