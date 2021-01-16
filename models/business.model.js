module.exports = (sequelize, Sequelize) => {
  const Business = sequelize.define('Businesses', {
    bid: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    uid: {
      type: Sequelize.INTEGER
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
    openTime: {
      type: Sequelize.DATE
    },
    closeTime: {
      type: Sequelize.DATE
    }
  });

 
  return Business;
};

