module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('Customers', {
    cid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uid: {
      type: Sequelize.INTEGER,
    },
    phoneNum: {
      type: Sequelize.STRING
    }
  });

  return Customer;
};