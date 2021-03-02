function createRelationships(sequelize) {
    const { Orders, Products, Businesses, OrderProduct, Customers, Vehicles, Employees, Categories } = sequelize.models;

    Customers.hasMany(Vehicles, { foreignKey: 'customerId' });
    Customers.hasMany(Orders, { foreignKey: 'customerId' });

    Orders.belongsTo(Customers, { foreignKey: 'customerId' });
    Orders.belongsTo(Businesses, { foreignKey: 'businessId' });

    Vehicles.belongsTo(Customers, { foreignKey: 'customerId' });

    Businesses.hasMany(Orders, { foreignKey: 'businessId' });
    Businesses.hasMany(Products, { foreignKey: 'businessId' });
    Businesses.hasMany(Employees, { foreignKey: 'businessId' });

    Employees.belongsTo(Businesses, { foreignKey: 'businessId' });

    Products.hasMany(Categories, { foreignKey: 'productId' });
    Products.belongsTo(Businesses, { foreignKey: 'businessId' });
    Products.belongsToMany(Orders, { through: OrderProduct });

    Categories.hasMany(Products, { foreignKey: 'productId' });
}

module.exports = { createRelationships }