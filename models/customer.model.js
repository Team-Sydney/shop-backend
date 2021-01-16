module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('Customers', {
    cid: {
      type: Sequelize.INTEGER,
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

