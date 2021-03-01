module.exports = (sequelize, Sequelize) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    //orderId
    //productId
    quantity: {
      type: Sequelize.INTEGER
    }
  }, { timestamps: false });

  return OrderProduct;
};