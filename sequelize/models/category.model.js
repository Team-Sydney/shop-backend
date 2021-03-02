module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define('Categories', {
    categoryId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    productId: {
      type: Sequelize.INTEGER
    },
    categoryName: {
      type: Sequelize.STRING
    }
  });

 
  return Category;
};

