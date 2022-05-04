'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //OneToMany: Un post peut avoir plusieurs commentaires
      models.Post.hasMany(models.Comment, { onDelete: "CASCADE", hooks: true });
      //ManyToOne: Chaque post appartient à un seul utilisateur
      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};