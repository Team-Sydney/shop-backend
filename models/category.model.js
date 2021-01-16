module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define('Categories', {
    catid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

 
  return Category;
};

