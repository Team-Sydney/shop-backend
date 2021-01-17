function createRelationships(sequelize) {
  const { Orders, Products, Businesses, OrderProduct, Customers, Vehicles } = sequelize.models;

  Products.belongsToMany(Orders, { through: OrderProduct });
  Orders.hasMany(Products);
  
  Customers.hasMany(Vehicles, {foreignKey: 'cid'});
  Customers.hasMany(Orders, {foreignKey: 'cid'});

  Businesses.hasMany(Orders, { foreignKey: 'bid' });
  Businesses.hasMany(Products, { foreignKey: 'bid' });

  // OrderProduct.belongsTo(Orders);
  // OrderProduct.belongsTo(Products);

}

module.exports = { createRelationships }