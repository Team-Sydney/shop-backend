module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define('Vehicles', {
      vid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      cid: {
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      license: {
        type: Sequelize.STRING
      }
    });
   
    return Vehicle;
  };
  
  