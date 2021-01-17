function createRelationships(sequelize) {
  const { Orders, Products, OrderProduct, Customers, Vehicles } = sequelize.models;

  Products.belongsToMany(Orders, { through: OrderProduct });
  Orders.hasMany(Products);
  
  Customers.hasMany(Vehicles, {foreignKey: 'cid'});
  Customers.hasMany(Orders, {foreignKey: 'cid'});

  // OrderProduct.belongsTo(Orders);
  // OrderProduct.belongsTo(Products);

}

module.exports = { createRelationships }