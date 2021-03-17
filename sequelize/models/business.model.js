module.exports = (sequelize, Sequelize) => {
    const Business = sequelize.define('Businesses', {
        businessId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phoneNum: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        openTime: {
            type: Sequelize.DATE
        },
        closeTime: {
            type: Sequelize.DATE
        }
    });

    return Business;
};