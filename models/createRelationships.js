function createRelationships(sequelize) {
  const { Orders, Products, Businesses, OrderProduct } = sequelize.models;

  Products.belongsToMany(Orders, { through: OrderProduct });
  Orders.hasMany(Products);

  Businesses.hasMany(Orders, { foreignKey: 'bid' });
  Businesses.hasMany(Products, { foreignKey: 'bid' });

  // OrderProduct.belongsTo(Orders);
  // OrderProduct.belongsTo(Products);

}

module.exports = { createRelationships }