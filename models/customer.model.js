module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('Customers', {
        customerId: {
            type: Sequelize.TEXT,
            primaryKey: true
        },
        name: {
            type: Sequelize.TEXT
        },
        phoneNum: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.TEXT
        }
    });

    return Customer;
};