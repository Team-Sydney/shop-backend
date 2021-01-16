function createRelationships(sequelize) {
  const { Orders, Products, OrderProduct } = sequelize.models;

  Products.belongsToMany(Orders, { through: OrderProduct });
  Orders.hasMany(Products);

  // OrderProduct.belongsTo(Orders);
  // OrderProduct.belongsTo(Products);

}

module.exports = { createRelationships }