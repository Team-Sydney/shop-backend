function createRelationships(sequelize) {
  const { Orders, Products, Businesses, OrderProduct, Customers, Vehicles } = sequelize.models;

  Products.belongsToMany(Orders, { through: OrderProduct });
  
  Customers.hasMany(Vehicles, {foreignKey: 'customerId'});
  Customers.hasMany(Orders, {foreignKey: 'customerId'});

  Vehicles.belongsTo(Customers, {foreignKey: 'customerId'});

  Businesses.hasMany(Orders, { foreignKey: 'businessId' });
  Businesses.hasMany(Products, { foreignKey: 'businessId' });
}

module.exports = { createRelationships }