module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define('Vehicles', {
      vehicleId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customerId: {
        type: Sequelize.TEXT
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
  
  