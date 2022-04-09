'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postlikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Postlikes.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
      models.Postlikes.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Postlikes.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Postlikes',
  });
  return Postlikes;
};