"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*chaque utulisateur peut avoir plusieur post*/
      models.User.hasMany(models.Post, { onDelete: "CASCADE", hooks: true });
       /*chaque utulisateur peut avoir plusieur comment*/
      models.User.hasMany(models.Comment, { onDelete: "CASCADE", hooks: true });
    }
  }
  User.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
