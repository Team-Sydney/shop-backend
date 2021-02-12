module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('Customers', {
    cid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uid: {
      type: Sequelize.TEXT,
    },
    phoneNum: {
      type: Sequelize.STRING
    }
  });

  return Customer;
};