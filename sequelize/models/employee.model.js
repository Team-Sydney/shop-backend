module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('Employees', {
        employeeId: {
            type: Sequelize.TEXT,
            primaryKey: true
        },
        businessId: { //FK
            type: Sequelize.INTEGER
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

    return Employee;
};